import React from "react";
import { Node, RootContent } from "mdast";
import styles from "./styles.module.css";
import { combineClasses, SITE_URL, textToSlug } from "@/util";
import Image from "next/image";
import { ContainerDirective } from "mdast-util-directive";
import { monospaceFont, sansSerif, serifFont } from "@/fonts";

interface AstRendererProps {
  root: Node;
  annotationId: string | null;
  setAnnotationId: (i: string | null) => void;
}

interface TextDirectiveNode extends Node {
  name: string;
  attributes: { [k: string]: string };
}

interface LinkNode extends Node {
  url: string;
}

interface ImageNode extends Node {
  url: string;
  alt: string;
  title?: string;
}

const treatTrailingSpaces = (str: string) => {
  const startsWithSpace = str.startsWith(" ");
  const endsWithSpace = str.endsWith(" ");
  const trimmed = str.trim();
  return (
    <>
      {startsWithSpace ? <>&nbsp;</> : ""}
      {trimmed}
      {endsWithSpace ? <>&nbsp;</> : ""}
    </>
  );
};

const extractSlugFromHeaderNode = (headerNode: Node) => {
  if ("children" in headerNode) {
    const textNode = headerNode.children as RootContent[];
    if ("value" in textNode[0]) {
      return textToSlug(textNode[0].value);
    }
  }
  return undefined;
};

const clickLink = (slug: string | undefined) => {
  if (!slug) {
    return;
  }
  window.history.replaceState({}, "", `#${slug}`);
  navigator.clipboard.writeText(window.location.href);
};

export default function AstRenderer(props: AstRendererProps) {
  const setAnnotationIdAndStopPropagation = (
    event: React.MouseEvent<HTMLSpanElement>,
    node: TextDirectiveNode
  ) => {
    event.stopPropagation();
    props.setAnnotationId(node.attributes["id"]);
  };

  const wrapHeader = (node: Node, child: JSX.Element) => {
    if ("depth" in node) {
      const depth = node.depth as number;
      const slug = extractSlugFromHeaderNode(node);
      const childWithLink =
        depth > 1 ? (
          <div className={styles.alignHeader}>
            {child}
            <span
              role="button"
              onClick={() => clickLink(slug)}
              className={combineClasses("link-icon", styles.linkButton)}
            >
              link
            </span>
          </div>
        ) : (
          child
        );
      const classNameAndId = { className: serifFont.className, id: slug };
      switch (depth) {
        case 1:
          return <h1 className={serifFont.className}>{childWithLink}</h1>;
        case 2:
          return <h2 {...classNameAndId}>{childWithLink}</h2>;
        case 3:
          return <h3 {...classNameAndId}>{childWithLink}</h3>;
        case 4:
          return <h4 {...classNameAndId}>{childWithLink}</h4>;
        case 5:
          return <h5 {...classNameAndId}>{childWithLink}</h5>;
        case 6:
          return <h6 {...classNameAndId}>{childWithLink}</h6>;
        default:
          return <h6 {...classNameAndId}>{childWithLink}</h6>;
      }
    } else {
      return <h6 className={serifFont.className}>{child}</h6>;
    }
  };

  const wrapLink = (node: LinkNode, child: JSX.Element) => {
    return (
      <a href={node.url} target="_blank">
        {child}
      </a>
    );
  };

  const wrapContainerDirective = (
    node: ContainerDirective,
    child: JSX.Element
  ) => {
    switch (node.name) {
      case "tldr":
        return (
          <div className={styles.tldr}>
            <div
              className={combineClasses(
                styles.annotationTypeText,
                sansSerif.className
              )}
            >
              foreword
            </div>
            {child}
          </div>
        );
      default:
        return child;
    }
  };

  const wrapTextDirective = (node: TextDirectiveNode, child: JSX.Element) => {
    switch (node.name) {
      case "hook":
        return (
          <span
            className={styles.hook}
            onClick={(e) => setAnnotationIdAndStopPropagation(e, node)}
          >
            {child}
          </span>
        );
      case "footnote":
        return (
          <div
            className={combineClasses(
              styles.footnote,
              node.attributes["id"] &&
                node.attributes["id"] !== props.annotationId &&
                styles.hidden
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={combineClasses(
                styles.annotationTypeText,
                sansSerif.className
              )}
            >
              footnote
            </div>
            {child}
          </div>
        );
      case "definition":
        return (
          <span
            className={styles.definitionHook}
            onClick={(e) => setAnnotationIdAndStopPropagation(e, node)}
          >
            {child}
            <span className={styles.definitionTooltip}>
              <div
                className={combineClasses(
                  styles.annotationTypeText,
                  sansSerif.className
                )}
              >
                definition
              </div>
              {node.attributes["def"]}
            </span>
          </span>
        );
      default:
        return child;
    }
  };

  const wrapImage = (node: ImageNode) => {
    return (
      <div className={styles.imageContainer}>
        <div className={styles.imageAndTitleContainer}>
          <Image
            src={`${SITE_URL}images/${node.url}`}
            alt={node.alt}
            width={500}
            height={200}
            className={styles.image}
            loading="eager"
          />
          {node.title && (
            <div
              className={combineClasses(styles.imageTitle, sansSerif.className)}
            >
              <span className="arrow-icon">switch_access_shortcut</span>
              {node.title}
            </div>
          )}
        </div>
      </div>
    );
  };

  const wrapChildren = (node: Node, child: JSX.Element) => {
    const type = node.type;
    if (!type) {
      return child;
    }
    switch (type) {
      case "heading":
        return wrapHeader(node, child);
      case "strong":
        return <span className={styles.strong}>{child}</span>;
      case "emphasis":
        return <span className={styles.emphasis}>{child}</span>;
      case "paragraph":
        return <div className={styles.paragraph}>{child}</div>;
      case "inlineCode":
        return (
          <span
            className={combineClasses(styles.mono, monospaceFont.className)}
          >
            {child}
          </span>
        );
      case "blockquote":
        return <div className={styles.blockQuote}>{child}</div>;
      case "code":
        return (
          <div className={combineClasses(styles.code, monospaceFont.className)}>
            {child}
          </div>
        );
      case "list":
        return <ul>{child}</ul>;
      case "listItem":
        return <li>{child}</li>;
      case "textDirective":
        return wrapTextDirective(node as TextDirectiveNode, child);
      case "image":
        return wrapImage(node as ImageNode);
      case "link":
        return wrapLink(node as LinkNode, child);
      case "containerDirective":
        return wrapContainerDirective(node as ContainerDirective, child);
      default:
        return child;
    }
  };

  const renderChildren = (children: RootContent[]) => {
    return (
      <>
        {children.map((child, i) => (
          <AstRenderer
            root={child}
            key={i}
            annotationId={props.annotationId}
            setAnnotationId={props.setAnnotationId}
          />
        ))}
      </>
    );
  };

  const getChildren = (node: Node) => {
    return "value" in node ? (
      <>{treatTrailingSpaces(node.value as string)}</>
    ) : "children" in node ? (
      renderChildren(node.children as RootContent[])
    ) : (
      <></>
    );
  };

  return wrapChildren(props.root, getChildren(props.root));
}

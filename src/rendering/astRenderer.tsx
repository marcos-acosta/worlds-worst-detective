import React from "react";
import { Node, RootContent } from "mdast";
import styles from "./styles.module.css";
import { JetBrains_Mono, Bree_Serif } from "next/font/google";
import { combineClasses } from "@/util";

export const monospaceFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const serifFont = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

interface AstRendererProps {
  root: Node;
  annotationId: string | null;
  setAnnotationId: (i: string | null) => void;
}

interface TextDirectiveNode extends Node {
  name: string;
  attributes: { [k: string]: string };
}

export default function AstRenderer(props: AstRendererProps) {
  const setAnnotationIdAndStopPropagation = (
    event: React.MouseEvent<HTMLSpanElement>,
    node: TextDirectiveNode
  ) => {
    event.stopPropagation();
    props.setAnnotationId(node.attributes["id"]);
  };

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

  const wrapHeader = (node: Node, child: JSX.Element) => {
    if ("depth" in node) {
      const depth = node.depth;
      switch (depth) {
        case 1:
          return <h1 className={serifFont.className}>{child}</h1>;
        case 2:
          return <h2 className={serifFont.className}>{child}</h2>;
        case 3:
          return <h3 className={serifFont.className}>{child}</h3>;
        case 4:
          return <h4 className={serifFont.className}>{child}</h4>;
        case 5:
          return <h5 className={serifFont.className}>{child}</h5>;
        case 6:
          return <h6 className={serifFont.className}>{child}</h6>;
        default:
          return <h1 className={serifFont.className}>{child}</h1>;
      }
    } else {
      return <h1 className={serifFont.className}>{child}</h1>;
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
          >
            {child}
          </div>
        );
      default:
        return child;
    }
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
      case "list":
        return <ul>{child}</ul>;
      case "listItem":
        return <li>{child}</li>;
      case "textDirective":
        return wrapTextDirective(node as TextDirectiveNode, child);
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

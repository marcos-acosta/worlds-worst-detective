import styles from "./PostComponent.module.css";
import { XmlNode } from "../logic/marcdown";
import { Annotation } from "./Post";
import { combineClassnames } from "../logic/util";

interface PostComponentProps {
  xml: XmlNode;
  isHighlighted: (id: string) => boolean;
  setAnnotation: (a: Annotation) => void;
}

const wrapContentWithHeader = (level: number, content: JSX.Element) => {
  switch (level) {
    case 1:
      return <h1>{content}</h1>;
    case 2:
      return <h2>{content}</h2>;
    case 3:
      return <h3>{content}</h3>;
    case 4:
      return <h4>{content}</h4>;
    case 5:
      return <h5>{content}</h5>;
    default:
      return <h6>{content}</h6>;
  }
};

const FONT_STYLES = {
  i: styles.italic,
  b: styles.bold,
  mono: styles.mono,
};

const BLOCK_STYLES = {
  code: styles.codeBlock,
  quot: styles.quotation,
};

interface AnnotationData {
  className: string;
  annotationContentTag: string;
}

const ANNOTATIONS: { [k: string]: AnnotationData } = {
  com: { className: styles.comment, annotationContentTag: "comment" },
  def: { className: styles.definition, annotationContentTag: "definition" },
};

const DO_NOT_DISPLAY = ["comment", "definition"];

const findChild = (node: XmlNode, type: string) =>
  node.children && node.children.find((node_) => node_.type === type);

export default function PostComponent(props: PostComponentProps) {
  const xml = props.xml;
  const attributes = xml.attributes;
  const type = xml.type;

  const renderContent = (node: XmlNode) => (
    <>
      {node.children ? (
        node.children.map((child) => (
          <PostComponent
            key={child.id}
            xml={child}
            isHighlighted={props.isHighlighted}
            setAnnotation={props.setAnnotation}
          />
        ))
      ) : node.text ? (
        node.text
      ) : (
        <></>
      )}
    </>
  );

  const innerContent = renderContent(xml);

  if (type === "document") {
    return innerContent;
  } else if (type === "br") {
    return <div className={styles.lineBreak} />;
  } else if (type === "pb") {
    return <div className={styles.paragraphBreak} />;
  } else if (type && type.match(/h\d/)) {
    const level = parseInt(type[1]);
    return (
      <div className={styles.section}>
        {wrapContentWithHeader(level, <>{attributes.title}</>)}
        {innerContent}
      </div>
    );
  } else if (type && Object.keys(FONT_STYLES).includes(type)) {
    return (
      <span className={FONT_STYLES[type as keyof typeof FONT_STYLES]}>
        {innerContent}
      </span>
    );
  } else if (type && Object.keys(BLOCK_STYLES).includes(type)) {
    return (
      <div className={BLOCK_STYLES[type as keyof typeof BLOCK_STYLES]}>
        {innerContent}
      </div>
    );
  } else if (type === "a") {
    return (
      <a href={attributes.href} target="blank_">
        {innerContent}
      </a>
    );
  } else if (type === "img") {
    return (
      <img src={attributes.src} alt={attributes.alt} className={styles.image} />
    );
  } else if (type && Object.keys(ANNOTATIONS).includes(type)) {
    const annotationData = ANNOTATIONS[type];
    const childNode = findChild(xml, annotationData.annotationContentTag);
    if (childNode) {
      return (
        <button
          className={combineClassnames(
            annotationData.className,
            props.isHighlighted(xml.id) && styles.highlighted
          )}
          onClick={() =>
            props.setAnnotation({
              textId: xml.id,
              title: innerContent,
              body: renderContent(childNode),
              type: type,
            })
          }
        >
          {innerContent}
        </button>
      );
    }
  } else if (type && DO_NOT_DISPLAY.includes(type)) {
    return <></>;
  } else {
    return innerContent;
  }
}

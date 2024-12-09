import { XmlElement } from "@rgrove/parse-xml";
import styles from "./Article.module.css";
import { isXmlElement } from "../logic/util";

interface ArticleProps {
  xml: XmlElement;
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

const renderContent = (node: XmlElement) => (
  <>
    {node.children ? (
      node.children
        .filter(isXmlElement)
        .map((child, i) => <Article key={i} xml={child as XmlElement} />)
    ) : node.text ? (
      node.text
    ) : (
      <></>
    )}
  </>
);

const FONT_STYLES = {
  i: styles.italic,
  b: styles.bold,
  mono: styles.mono,
};

const BLOCK_STYLES = {
  code: styles.codeBlock,
  quot: styles.quotation,
};

export default function Article(props: ArticleProps) {
  const xml = props.xml;
  const attributes = xml.attributes;
  const type = xml.name;

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
  } else {
    return innerContent;
  }
}

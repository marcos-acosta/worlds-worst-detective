import { useState } from "react";
import { Section as SectionInterface } from "../logic/md-compiler";
import styles from "./Section.module.css";
import { Annotation } from "./Post";
import Paragraph from "./Paragraph";
import { combineClassnames } from "../logic/util";

export interface SectionProps {
  section: SectionInterface;
  isHighlighted: (id: string) => boolean;
  setAnnotation: (a: Annotation | undefined) => void;
}

const getTitle = (title: string, level: number) => {
  switch (level) {
    case 1:
      return <h1>{title}</h1>;
    case 2:
      return <h2>{title}</h2>;
    case 3:
      return <h3>{title}</h3>;
    case 4:
      return <h4>{title}</h4>;
    case 5:
      return <h5>{title}</h5>;
    default:
      return <h6>{title}</h6>;
  }
};

const getId = (title: string) =>
  title
    .replace(/[^a-zA-Z0-9\s]/, "")
    .replace(/\s/, "-")
    .toLowerCase();

export default function Section(props: SectionProps) {
  const [collapse, setCollapse] = useState(props.section.isDigression);
  const [isHovering, setIsHovering] = useState(false);
  const section = props.section;
  const id = getId(section.title);

  const handleHashClick = () => {
    const newUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(newUrl);
    window.location.replace(newUrl);
  };

  return (
    <div
      className={combineClassnames(
        styles.sectionContainer,
        section.isDigression && styles.digression,
        section.level <= 2 && styles.bigHeader,
        section.level >= 3 && styles.smallHeader
      )}
      id={id}
    >
      {section.isDigression && (
        <div className={styles.digressionTitle}>DIGRESSION</div>
      )}
      <div
        className={styles.sectionTitle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {getTitle(section.title, section.level)}
        {section.isDigression && (
          <button
            className={styles.collapseButton}
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "EXPAND" : "COLLAPSE"}
          </button>
        )}
        {isHovering && section.level > 1 && (
          <button onClick={handleHashClick} className={styles.hash}>
            #
          </button>
        )}
      </div>
      {!collapse && (
        <div className={styles.sectionBody}>
          <div className={styles.sectionIntro}>
            {section.bodies.map((body, i) => (
              <Paragraph
                paragraph={body}
                key={i}
                isHighlighted={props.isHighlighted}
                setAnnotation={props.setAnnotation}
              />
            ))}
          </div>
          <div className={styles.subsections}>
            {section.subsections.map((subsection, i) => (
              <Section
                key={i}
                section={subsection}
                isHighlighted={props.isHighlighted}
                setAnnotation={props.setAnnotation}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

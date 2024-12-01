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

export default function Section(props: SectionProps) {
  const section = props.section;
  const [collapse, setCollapse] = useState(section.isDigression);

  return (
    <div
      className={combineClassnames(
        styles.sectionContainer,
        section.isDigression && styles.digression,
        section.level <= 2 && styles.bigHeader,
        section.level >= 3 && styles.smallHeader
      )}
    >
      {section.isDigression && (
        <div className={styles.digressionTitle}>DIGRESSION</div>
      )}
      <div className={styles.sectionTitle}>
        {getTitle(section.title, section.level)}
        {section.isDigression && (
          <button
            className={styles.collapseButton}
            onClick={() => setCollapse(!collapse)}
          >
            {collapse ? "EXPAND" : "COLLAPSE"}
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

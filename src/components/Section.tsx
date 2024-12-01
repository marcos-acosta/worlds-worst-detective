import { useState } from "react";
import { Section as SectionInterface } from "../logic/md-compiler";
import styles from "./Section.module.css";
import { Annotation } from "./Post";
import Paragraph from "./Paragraph";

export interface SectionProps {
  section: SectionInterface;
  isHighlighted: (id: string) => boolean;
  setAnnotation: (a: Annotation | undefined) => void;
}

const getTitle = (
  title: string,
  level: number,
  isDigression: boolean | undefined
) => {
  const title_ = `${title}${isDigression ? " (digression)" : ""}`;
  switch (level) {
    case 1:
      return <h1>{title_}</h1>;
    case 2:
      return <h2>{title_}</h2>;
    case 3:
      return <h3>{title_}</h3>;
    case 4:
      return <h4>{title_}</h4>;
    case 5:
      return <h5>{title_}</h5>;
    default:
      return <h6>{title_}</h6>;
  }
};

export default function Section(props: SectionProps) {
  const section = props.section;
  const [collapse, setCollapse] = useState(section.isDigression);

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        {section.isDigression && (
          <button onClick={() => setCollapse(!collapse)}>
            {collapse ? "show" : "collapse"}
          </button>
        )}
        {getTitle(section.title, section.level, section.isDigression)}
      </div>
      {!collapse && (
        <>
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
        </>
      )}
    </div>
  );
}

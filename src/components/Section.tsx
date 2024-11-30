import { Section as SectionInterface } from "../logic/md-compiler";
import ParagraphComponent from "./ParagraphComponent";
import styles from "./Section.module.css";

export interface SectionProps {
  section: SectionInterface;
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
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        {getTitle(section.title, section.level)}
      </div>
      <div className={styles.sectionIntro}>
        {section.bodies.map((body, i) => (
          <ParagraphComponent paragraph={body} key={i} />
        ))}
      </div>
      <div className={styles.subsections}>
        {section.subsections.map((subsection, i) => (
          <Section key={i} section={subsection} />
        ))}
      </div>
    </div>
  );
}

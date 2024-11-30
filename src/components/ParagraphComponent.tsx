import { Paragraph, ParagraphType } from "../logic/md-compiler";
import { combineClassnames } from "../logic/util";
import styles from "./Paragraph.module.css";
import SpanComponent from "./SpanComponent";

interface ParagraphComponentProps {
  paragraph: Paragraph;
}

export default function ParagraphComponent(props: ParagraphComponentProps) {
  const paragraph = props.paragraph;
  return (
    <div
      className={combineClassnames(
        styles.paragraphContainer,
        paragraph.paragraphType === ParagraphType.CODE_BLOCK && styles.codeBlock
      )}
    >
      {paragraph.partitions.map((partition, i) => (
        <div className={styles.newLine} key={i}>
          <SpanComponent partition={partition} />
        </div>
      ))}
    </div>
  );
}

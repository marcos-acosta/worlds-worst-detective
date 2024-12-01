import { Paragraph, ParagraphType } from "../logic/md-compiler";
import { combineClassnames, joinNodes } from "../logic/util";
import styles from "./Paragraph.module.css";
import { Annotation } from "./Post";
import SpanComponent from "./SpanComponent";

interface ParagraphComponentProps {
  paragraph: Paragraph;
  isHighlighted: (id: string) => boolean;
  setAnnotation: (a: Annotation | undefined) => void;
}

export default function ParagraphComponent(props: ParagraphComponentProps) {
  const paragraph = props.paragraph;
  return (
    <div
      className={combineClassnames(
        styles.paragraphContainer,
        paragraph.paragraphType === ParagraphType.CODE_BLOCK &&
          styles.codeBlock,
        paragraph.paragraphType === ParagraphType.QUOTE && styles.quote
      )}
    >
      {joinNodes(
        paragraph.partitions.map((partition) => (
          <div className={styles.line} key={partition.id}>
            <SpanComponent
              partition={partition}
              isHighlighted={props.isHighlighted}
              setAnnotation={props.setAnnotation}
            />
          </div>
        )),
        <div className={styles.newline} />
      )}
    </div>
  );
}

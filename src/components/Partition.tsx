import {
  Partition as PartitionInterface,
  PartitionType,
} from "../logic/partition";
import styles from "./Partition.module.css";
import { Annotation, AnnotationType } from "./Post";
import { combineClassnames } from "../logic/util";

interface PartitionProps {
  partition: PartitionInterface;
  isHighlighted: (id: string) => boolean;
  setAnnotation: (a: Annotation | undefined) => void;
}

const ELEMENT_TYPE_TO_CLASSNAME: { [k: number]: string } = {
  [PartitionType.BOLD]: styles.bold,
  [PartitionType.ITALIC]: styles.italic,
  [PartitionType.CODE]: styles.code,
  [PartitionType.FOOTNOTE]: styles.footnote,
  [PartitionType.LINK]: styles.link,
  [PartitionType.DEFINITION]: styles.definition,
  [PartitionType.IMAGE]: styles.imageContainer,
};

export default function Partition(props: PartitionProps) {
  const partition = props.partition;
  const isHighlighted = props.isHighlighted(partition.id);

  const createPartitions = (content: string | PartitionInterface[]) => {
    let jsxContent = <></>;
    if (Array.isArray(content)) {
      jsxContent = (
        <>
          {content.map((partition_) => (
            <Partition
              partition={partition_}
              key={partition_.id}
              isHighlighted={props.isHighlighted}
              setAnnotation={props.setAnnotation}
            />
          ))}
        </>
      );
    } else {
      jsxContent = <>{content}</>;
    }
    return jsxContent;
  };

  let mainContent = createPartitions(partition.mainText);
  const auxContent = partition.auxText && createPartitions(partition.auxText);

  if (
    partition.partitionType === PartitionType.LINK &&
    partition.auxPlainText
  ) {
    mainContent = (
      <a href={partition.auxPlainText} target="_blank">
        {mainContent}
      </a>
    );
  } else if (
    partition.partitionType === PartitionType.IMAGE &&
    partition.auxPlainText
  ) {
    const altText = Array.isArray(partition.mainText)
      ? "no alt provided"
      : partition.mainText;
    mainContent = (
      <img
        src={`/${partition.auxPlainText}`}
        alt={altText}
        className={styles.image}
      />
    );
  }

  const toggleAnnotation = (e: React.MouseEvent) => {
    if (isHighlighted) {
      props.setAnnotation(undefined);
    } else if (auxContent) {
      e.stopPropagation();
      const type =
        partition.partitionType === PartitionType.FOOTNOTE
          ? AnnotationType.FOOTNOTE
          : AnnotationType.DEFINITION;
      props.setAnnotation({
        textId: partition.id,
        title: mainContent,
        body: auxContent,
        type: type,
      });
    }
  };

  return (
    <span
      className={combineClassnames(
        styles.partition,
        ELEMENT_TYPE_TO_CLASSNAME[partition.partitionType],
        isHighlighted && styles.highlighted
      )}
      onClick={(e) => toggleAnnotation(e)}
    >
      {mainContent}
    </span>
  );
}

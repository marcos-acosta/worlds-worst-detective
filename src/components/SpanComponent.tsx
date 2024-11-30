import { useState } from "react";
import { Partition, PartitionType } from "../logic/partition";
import styles from "./SpanComponent.module.css";

interface SpanComponentProps {
  partition: Partition;
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

const AUX_ELEMENT_TYPE_TO_CLASSNAME: { [k: number]: string } = {
  [PartitionType.FOOTNOTE]: styles.footnoteContent,
  [PartitionType.DEFINITION]: styles.definitionContent,
};

const createSpans = (content: string | Partition[]) => {
  let jsxContent = <></>;
  if (Array.isArray(content)) {
    jsxContent = (
      <>
        {content.map((partition_, i) => (
          <SpanComponent partition={partition_} key={i} />
        ))}
      </>
    );
  } else {
    jsxContent = <>{content}</>;
  }
  return jsxContent;
};

export default function SpanComponent(props: SpanComponentProps) {
  const [showAuxText, setShowAuxText] = useState(false);
  const partition = props.partition;
  let mainContent = createSpans(partition.mainText);
  const auxContent = partition.auxText && createSpans(partition.auxText);
  const canShowAuxText = showAuxText && auxContent;
  if (partition.partitionType === PartitionType.IMAGE) {
    console.log(partition);
  }
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
  return (
    <>
      <span
        className={ELEMENT_TYPE_TO_CLASSNAME[partition.partitionType]}
        onClick={() => setShowAuxText(!showAuxText)}
      >
        {mainContent}
      </span>
      {canShowAuxText && (
        <div className={AUX_ELEMENT_TYPE_TO_CLASSNAME[partition.partitionType]}>
          {auxContent}
        </div>
      )}
    </>
  );
}

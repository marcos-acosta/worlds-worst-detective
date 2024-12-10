import styles from "./AnnotationContainer.module.css";
import { Annotation } from "./Post";

interface AnnotationContainerProps {
  annotation: Annotation;
}

const ANNOTATION_TYPE_TO_STRING: { [k: string]: string } = {
  com: "FOOTNOTE",
  def: "DEFINITION",
};

export default function AnnotationContainer(props: AnnotationContainerProps) {
  return (
    <div className={styles.annotationContainer}>
      {props.annotation.type in ANNOTATION_TYPE_TO_STRING && (
        <div className={styles.annotationType}>
          {ANNOTATION_TYPE_TO_STRING[props.annotation.type]}
        </div>
      )}
      <div className={styles.annotationTitle}>{props.annotation.title}</div>
      <div className={styles.annotationBody}>{props.annotation.body}</div>
    </div>
  );
}

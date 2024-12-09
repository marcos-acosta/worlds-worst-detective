import styles from "./AnnotationContainer.module.css";
import { Annotation } from "./Post";

interface AnnotationContainerProps {
  annotation: Annotation;
}

export default function AnnotationContainer(props: AnnotationContainerProps) {
  return (
    <div className={styles.annotationContainer}>
      <div className={styles.annotationTitle}>{props.annotation.title}</div>
      <div className={styles.annotationBody}>{props.annotation.body}</div>
    </div>
  );
}

import Section from "./Section";
import styles from "./Post.module.css";
import { Section as SectionInterface } from "./../logic/md-compiler.ts";
import { useState } from "react";
import { combineClassnames } from "./../logic/util";

export enum AnnotationType {
  DEFINITION,
  FOOTNOTE,
}

export interface Annotation {
  textId: string;
  title: JSX.Element;
  body: JSX.Element;
  type: AnnotationType;
}

export interface PostProps {
  sections: SectionInterface[];
}

const ANNOTATION_TYPE_TO_CLASSNAME = {
  [AnnotationType.DEFINITION]: styles.definition,
  [AnnotationType.FOOTNOTE]: styles.footnote,
};

function Post(props: PostProps) {
  const [annotation, setAnnotation] = useState(
    undefined as Annotation | undefined
  );
  const isHighlighted = (id: string) => id === annotation?.textId;

  return (
    <div
      className={combineClassnames(
        styles.blogContainer,
        !annotation && styles.noAnnotation
      )}
      onClick={() => setAnnotation(undefined)}
    >
      <div className={styles.postContentContainer}>
        {props.sections.map((s: SectionInterface) => (
          <Section
            section={s}
            key={s.title}
            isHighlighted={isHighlighted}
            setAnnotation={setAnnotation}
          />
        ))}
      </div>
      {annotation && (
        <div
          className={combineClassnames(
            styles.annotationContainer,
            ANNOTATION_TYPE_TO_CLASSNAME[annotation.type]
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.annotationType}>
            {annotation.type === AnnotationType.DEFINITION
              ? "DEFINITION"
              : "FOOTNOTE"}
          </div>
          <div className={styles.annotationTitle}>{annotation.title}</div>
          :&nbsp;
          <div className={styles.annotationBody}>{annotation.body}</div>
        </div>
      )}
    </div>
  );
}

export default Post;

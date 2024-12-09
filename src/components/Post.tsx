import styles from "./Post.module.css";
import { useState } from "react";
import { XmlNode } from "../logic/marcdown.ts";
import PostComponent from "./PostComponent.tsx";
import AnnotationContainer from "./AnnotationContainer.tsx";

export interface Annotation {
  textId: string;
  title: JSX.Element;
  body: JSX.Element;
  type: string;
}

export interface PostProps {
  xml: XmlNode;
}

export function Post(props: PostProps) {
  const [annotation, setAnnotation] = useState(
    undefined as Annotation | undefined
  );
  const isHighlighted = (id: string) => id === annotation?.textId;

  return (
    <div className={styles.postContainer}>
      {annotation && <AnnotationContainer annotation={annotation} />}
      <PostComponent
        xml={props.xml}
        setAnnotation={setAnnotation}
        isHighlighted={isHighlighted}
      />
    </div>
  );
}

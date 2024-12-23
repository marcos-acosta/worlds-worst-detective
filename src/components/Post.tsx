import styles from "./Post.module.css";
import { useState } from "react";
import PostComponent from "./PostComponent.tsx";
import AnnotationContainer from "./AnnotationContainer.tsx";
import { MarklowNode } from "marklow";
import Header from "./Header.tsx";

export interface Annotation {
  textId: string;
  title: JSX.Element;
  body: JSX.Element;
  type: string;
}

export interface PostProps {
  xml: MarklowNode;
}

export function Post(props: PostProps) {
  const [annotation, setAnnotation] = useState(null as Annotation | null);
  const isHighlighted = (id: string) => id === annotation?.textId;

  return (
    <>
      <div className={styles.postContainer} onClick={() => setAnnotation(null)}>
        <Header />
        <br />
        {annotation && <AnnotationContainer annotation={annotation} />}
        <PostComponent
          xml={props.xml}
          setAnnotation={setAnnotation}
          isHighlighted={isHighlighted}
        />
      </div>
    </>
  );
}

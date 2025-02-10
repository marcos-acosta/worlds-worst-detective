"use client";

import { useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./page.module.css";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";

const FILENAME = "test";

export default function Home() {
  const [content, setContent] = useState("");
  const [annotationId, setAnnotationId] = useState(null as string | null);

  useEffect(() => {
    fetch(`/md/${FILENAME}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const tree = fromMarkdown(content, {
    extensions: [directive()],
    mdastExtensions: [directiveFromMarkdown()],
  });

  return (
    <div
      className={styles.cancelClickScreen}
      onClick={() => setAnnotationId(null)}
    >
      <div className={styles.blogContainer}>
        <div className={styles.textContainer}>
          <AstRenderer
            root={tree}
            annotationId={annotationId}
            setAnnotationId={setAnnotationId}
          />
        </div>
      </div>
    </div>
  );
}

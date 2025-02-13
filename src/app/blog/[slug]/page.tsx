"use client";

import { Node } from "mdast";
import { useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./blog.module.css";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";
import { useParams } from "next/navigation";

export default function Article() {
  const [content, setContent] = useState(null as Node | null);
  const paramsNew = useParams();
  const [annotationId, setAnnotationId] = useState(null as string | null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        `http://localhost:3001/api/blog/${paramsNew.slug}`
      );
      const data = await res.json();
      const tree = fromMarkdown(data.contents, {
        extensions: [directive()],
        mdastExtensions: [directiveFromMarkdown()],
      });
      setContent(tree);
    }
    fetchPosts();
  }, []);

  console.log(content);

  return content ? (
    <div
      className={styles.cancelClickScreen}
      onClick={() => setAnnotationId(null)}
    >
      <div className={styles.blogContainer}>
        <div className={styles.textContainer}>
          <AstRenderer
            root={content}
            annotationId={annotationId}
            setAnnotationId={setAnnotationId}
          />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

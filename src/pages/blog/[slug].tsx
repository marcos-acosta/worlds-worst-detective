"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./blog.module.css";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";

export default function Article() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [annotationId, setAnnotationId] = useState(null as string | null);

  console.log(`/md/${router.query.slug}.md`);

  useEffect(() => {
    if (router.query.slug) {
      fetch(`/md/${router.query.slug}.md`)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, []);

  console.log(content);

  const tree = fromMarkdown(content, {
    extensions: [directive()],
    mdastExtensions: [directiveFromMarkdown()],
  });

  return tree ? (
    <>
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
    </>
  ) : (
    "..."
  );
}

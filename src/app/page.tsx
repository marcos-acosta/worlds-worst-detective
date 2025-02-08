"use client";

import { useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./page.module.css";

const FILENAME = "test";

export default function Home() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/md/${FILENAME}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  const tree = fromMarkdown(content);
  console.log(tree);

  return (
    <div className={styles.blogContainer}>
      <div className={styles.textContainer}>
        <AstRenderer root={tree} />
      </div>
    </div>
  );
}

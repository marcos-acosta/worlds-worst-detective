"use client";

import { Node } from "mdast";
import { useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./blog.module.css";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";
import { useParams } from "next/navigation";
import { combineClasses } from "@/util";
import Image from "next/image";
import { xanh_mono } from "../page";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Article() {
  const [content, setContent] = useState(null as Node | null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const paramsNew = useParams();
  const [annotationId, setAnnotationId] = useState(null as string | null);
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`http://localhost:3001/api/${paramsNew.slug}`);
      const data = await res.json();
      const tree = fromMarkdown(data.contents, {
        extensions: [directive()],
        mdastExtensions: [directiveFromMarkdown()],
      });
      setContent(tree);
      console.log(tree);
    }
    fetchPosts();
  }, []);

  const updateScrollDirection = () => {
    setScrollY(window.scrollY);
    if (window.scrollY > scrollY) {
      setScrollingUp(false);
    } else {
      setScrollingUp(true);
    }
  };

  useEffect(() => {
    addEventListener("scroll", updateScrollDirection);
    return () => {
      removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollY]);

  useEffect(() => {
    // Get hash from URL
    const hash = window.location.hash;
    if (hash) {
      // Add a small delay to ensure content is rendered
      console.log("here");

      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 1000);
    }
  }, [searchParams]); // Re-run when search params change

  return content ? (
    <div
      className={styles.cancelClickScreen}
      onClick={() => setAnnotationId(null)}
    >
      <div
        className={combineClasses(
          styles.headerContainer,
          !scrollingUp && styles.hide
        )}
      >
        <div className={styles.headerContent}>
          <Link href="/" className={styles.titleContainer}>
            <Image
              className={styles.detectiveImage}
              src="/images/detective.png"
              height={40}
              width={20}
              alt="A little detective figure"
            />
            <div
              className={combineClasses(styles.headerText, xanh_mono.className)}
            >
              world's worst detective
            </div>
          </Link>
        </div>
      </div>
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

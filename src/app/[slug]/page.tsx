"use client";

import { Node } from "mdast";
import { useCallback, useEffect, useState } from "react";
import { fromMarkdown } from "mdast-util-from-markdown";
import AstRenderer from "@/rendering/astRenderer";
import styles from "./blog.module.css";
import { directive } from "micromark-extension-directive";
import { directiveFromMarkdown } from "mdast-util-directive";
import { useParams } from "next/navigation";
import { combineClasses, SITE_URL } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { titleFont } from "@/fonts";
import detectiveImage from "./../../../public/images/detective.png";

export default function Article() {
  const [content, setContent] = useState(null as Node | null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [annotationId, setAnnotationId] = useState(null as string | null);
  const [loaded, setLoaded] = useState(false);
  const paramsNew = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(`${SITE_URL}api/${paramsNew.slug}`);
      const data = await res.json();
      const tree = fromMarkdown(data.contents, {
        extensions: [directive()],
        mdastExtensions: [directiveFromMarkdown()],
      });
      setContent(tree);
    }
    fetchPosts();
  }, [paramsNew.slug]);

  const updateScrollDirection = useCallback(() => {
    setScrollY(window.scrollY);
    if (window.scrollY > scrollY) {
      setScrollingUp(false);
    } else {
      setScrollingUp(true);
    }
  }, [scrollY]);

  useEffect(() => {
    addEventListener("scroll", updateScrollDirection);
    return () => {
      removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollY, updateScrollDirection]);

  useEffect(() => {
    // Get hash from URL
    setLoaded(true);
    const hash = window.location.hash;
    if (hash) {
      if (!loaded) {
        // Add a small delay to ensure content is rendered
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 1000);
      } else {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }
  }, [searchParams]);

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
              src={detectiveImage}
              alt="A little detective figure"
            />
            <div
              className={combineClasses(styles.headerText, titleFont.className)}
            >
              world&apos;s worst detective
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

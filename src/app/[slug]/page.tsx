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
import notFoundImage from "./../../../public/images/not-found.png";
import detectiveImage from "./../../../public/images/detective.png";
import { PostData, POSTS } from "@/posts";
import SimplePage from "@/rendering/simplePage";

export default function Article() {
  const [content, setContent] = useState(null as Node | null);
  const [error, setError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [annotationId, setAnnotationId] = useState(null as string | null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchPosts() {
      const post: PostData | undefined = POSTS.find(
        (post) => post.url === params.slug
      );
      if (!post) {
        setError(true);
        return;
      }
      const res = await fetch(
        `${SITE_URL}api/${post.draft ? "draft/" : ""}${params.slug}`
      );
      if (!res.ok) {
        setError(true);
        return;
      }
      const data = await res.json();
      if (post.draft) {
        // Convert text to AST object
        const tree = fromMarkdown(data.contents, {
          extensions: [directive()],
          mdastExtensions: [directiveFromMarkdown()],
        });
        console.log(tree);
        setContent(tree);
      } else {
        // Response is already an AST object
        setContent(data.contents);
      }
    }
    fetchPosts();
  }, [params.slug]);

  const updateScrollDirection = useCallback(() => {
    setScrollY(window.scrollY);
    if (window.scrollY < 50 || window.scrollY <= scrollY) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
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
  ) : error ? (
    <SimplePage
      title="I can't find that article."
      body={
        <>
          Either that URL doesn&apos;t exist, or there was some issue fetching
          the content from the backend.
        </>
      }
      image={notFoundImage}
      alt="Detective holding a magnifying glass"
    />
  ) : (
    <></>
  );
}

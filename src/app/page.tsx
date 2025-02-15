import Link from "next/link";
import styles from "./page.module.css";
import { combineClasses, formatDate } from "@/util";
import { POSTS } from "@/posts";
import {
  Bree_Serif,
  JetBrains_Mono,
  Roboto,
  Xanh_Mono,
} from "next/font/google";
import Image from "next/image";

export const xanh_mono = Xanh_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const monospaceFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const serifFont = Bree_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

export const sansSerif = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Homepage() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.homepageContent}>
        <div>
          <div className={styles.detectiveHeader}>
            <Image
              src="/images/detective.png"
              alt="A little detective icon"
              className={styles.detectiveImage}
              width={85}
              height={178}
            />
            <div
              className={combineClasses(
                xanh_mono.className,
                styles.detectiveTitle
              )}
            >
              World&apos;s
              <br />
              Worst
              <br />
              Detective
            </div>
          </div>
          <div className={styles.introBlurb}>
            <p>
              In every corner of this baffling world, there is a mystery waiting
              to be solved. Could the value of pi be different in another
              universe, and if so, what would that look like? How can we add two
              numbers larger than the number of atoms that ever existed and be
              sure we got the right answer? Who decided that state-of-the-art
              LLMs should always punctuate their responses with a pun and an
              emoji? Does getting hit by a car preclude me from writing a guide
              to jaywalking? Why was the man at the bodega today in such a rush
              for a sandwich that he couldn't wait two minutes for the deli guy
              to come back?
            </p>
            <p>
              The list goes on. But rest assured&ndash;{" "}
              <a href="https://marcos.ac" target="_blank">
                someone
              </a>{" "}
              is on the case.
            </p>
          </div>
          <div className={styles.articleList}>
            {POSTS.sort(
              (postA, postB) =>
                postB.datePublished.valueOf() - postA.datePublished.valueOf()
            ).map(
              (postData) =>
                !postData.hide && (
                  <div key={postData.url} className={styles.postEntry}>
                    <div
                      className={combineClasses(
                        styles.publishDate,
                        monospaceFont.className
                      )}
                    >
                      {formatDate(postData.datePublished)}
                    </div>
                    <div className={styles.postTitle}>
                      <Link href={`/${postData.url}`}>{postData.title}</Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

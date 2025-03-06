import styles from "./simplePage.module.css";
import { combineClasses } from "@/util";
import { serifFont } from "@/fonts";
import Link from "next/link";

interface SimplePageProps {
  title: string;
  body: JSX.Element;
  rest?: JSX.Element;
}

export default function SimplePage(props: SimplePageProps) {
  return (
    <div className={styles.subscribePageContainer}>
      <div className={styles.messageAndFormContainer}>
        <div className={styles.backToHome}>
          ← Back to <Link href="/">homepage</Link>
        </div>
        <div className={styles.messageContainer}>
          <h1
            className={combineClasses(
              styles.subscribeHeader,
              serifFont.className
            )}
          >
            {props.title}
          </h1>
          <div className={styles.subscribeMessage}>{props.body}</div>
        </div>
        {props.rest}
      </div>
    </div>
  );
}

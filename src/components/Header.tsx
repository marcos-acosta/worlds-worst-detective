import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.backButton}>
        <Link to="/">Back</Link>
      </div>
      <div className={styles.headerTitleContainer}>
        <Link to="/">
          <div className={styles.detectiveImage}>
            <img
              src="/detective.png"
              alt="A little detective icon"
              className={styles.detectiveImage}
            />
          </div>
          <div className={styles.title}>World's Worst Detective</div>
        </Link>
      </div>
    </div>
  );
}

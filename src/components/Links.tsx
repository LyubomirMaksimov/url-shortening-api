import React from "react";
import styles from "./Links.module.css";

interface props {
  id: string;
  link: string;
  short: string;
  copied: boolean;
  onCopy: any;
}

const Links: React.FC<props> = ({ id, link, short, copied, onCopy }) => {
  return (
    <div className={styles.linkContainer}>
      <p className={styles.originalLink}>{link}</p>
      <div className={styles.right}>
        <p className={styles.shortLink}>{short}</p>
        {copied ? (
          <button className={`${styles.linkBtn} ${styles.copied}`}>
            Copied
          </button>
        ) : (
          <button
            className={`${styles.linkBtn}`}
            onClick={() => {
              onCopy(id);
            }}
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
};

export default Links;

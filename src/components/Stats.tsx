import React from "react";
import styles from "./Stats.module.css";
import BrandImg from "../assets/images/icon-brand-recognition.svg";
import DetailImg from "../assets/images/icon-detailed-records.svg";
import FullyImg from "../assets/images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <div className={styles.statSection}>
      <p className={styles.title}>Advanced Statistics</p>
      <p className={styles.description}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className={styles.statContainer}>
        <div className={styles.statLine}></div>
        <div className={`${styles.stat} ${styles.statLeft}`}>
          <div className={styles.imgSpan}>
            <img src={BrandImg} alt="stat1" className={styles.statImg} />
          </div>
          <p className={styles.statTitle}>Brand Recognition</p>
          <p className={styles.statText}>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className={styles.stat}>
          <div className={styles.imgSpan}>
            <img src={DetailImg} alt="stat1" className={styles.statImg} />
          </div>
          <p className={styles.statTitle}>Detailed Records</p>
          <p className={styles.statText}>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
    
        </div>
        <div className={`${styles.stat} ${styles.statRight}`}>
          <div className={styles.imgSpan}>
            <img src={FullyImg} alt="stat1" className={styles.statImg} />
          </div>
          <p className={styles.statTitle}>Fully Customizable</p>
          <p className={styles.statText}>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

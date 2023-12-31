import React from "react";
import deskImg from "../assets/images/illustration-working.svg";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.left}>
        <h1>More than just shorter links </h1>
        <p className={styles.description}>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <p className={styles.btn}>Get Started</p>
      </div>
      <div className={styles["hero-img"]}>
        <img src={deskImg} alt="" loading='lazy'/>
      </div>
    </div>
  );
};

export default Hero;

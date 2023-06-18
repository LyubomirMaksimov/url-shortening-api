import React from "react";
import styles from "./MobileMenuPopUp.module.css";
import { Link } from "react-router-dom";

const MobileMenuPopUp = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.top}>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/resources">Resources</Link>
      </div>
      <span className={styles.line}></span>
      <div className={styles.bottom}>
        <Link to="/login">Login</Link>
        <Link className={styles.signup} to="/Signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MobileMenuPopUp;

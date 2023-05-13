import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-bar-left"]}>
        <span className={styles.logo}>Shortly</span>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/res">Resources</Link>
      </div>
      <div className="nav-bar-right">
        <Link to="/login">Login</Link>
        <Link className={styles.signup} to="/Signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

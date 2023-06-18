import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar: React.FC<{
  menuHandler: () => void;
}> = ({ menuHandler }) => {
  return (
    <div className={styles["nav-bar"]}>
      <div className={styles["nav-bar-left"]}>
        <span className={styles.logo}>Shortly</span>
        <div className={styles["left-links"]}>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/resources">Resources</Link>
        </div>
      </div>
      <div className={styles["nav-bar-right"]}>
        <Link to="/login">Login</Link>
        <Link className={styles.signup} to="/Signup">
          Sign Up
        </Link>
      </div>
      <div className={styles.navBarMenu}>
        <GiHamburgerMenu onClick={menuHandler} />
      </div>
    </div>
  );
};

export default NavBar;

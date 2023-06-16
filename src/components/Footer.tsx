import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import fbImg from "../assets/images/icon-facebook.svg";
import twitterImg from "../assets/images/icon-twitter.svg";
import pintImg from "../assets/images/icon-pinterest.svg";
import instagramImg from "../assets/images/icon-instagram.svg";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footContainer}>
      <div className={styles.boostPanel}>
        <h1 className={styles.boostTitle}>Boost your links today</h1>
        <Link to="/" className={styles.boostBtn}>
          Get Started
        </Link>
      </div>
      <div className={styles.footer}>
        <div className={styles.logo}>Shortly</div>
        <div className={styles.links}>
          <div className={styles.linksHeader}>
            <Link to="/" className={styles.categoryTitle}>
              Features
            </Link>
            <Link to="/"> Link Shortening</Link>
            <Link to="/"> Branded Links</Link>
            <Link to="/"> Analytics</Link>
          </div>
          <div className={styles.linksHeader}>
            <Link to="/" className={styles.categoryTitle}>
              Resources
            </Link>
            <Link to="/"> Blog</Link>
            <Link to="/"> Developers</Link>
            <Link to="/"> Support</Link>
          </div>
          <div className={styles.linksHeader}>
            <Link to="/" className={styles.categoryTitle}>
              Company
            </Link>
            <Link to="/"> About</Link>
            <Link to="/"> Our Team</Link>
            <Link to="/"> Careers</Link>
            <Link to="/"> Contact</Link>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <img src={fbImg} alt="" />
          <img src={twitterImg} alt="" />
          {/* <AiOutlineInstagram className={styles.img} /> */}
          <img src={pintImg} alt="" />
          <img src={instagramImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

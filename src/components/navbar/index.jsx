import React from "react";
import styles from "./styles.module.css";
import MCGLogo from "../../assets/MCGLogo.svg";

export default function Navbar() {
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navbar}>
        <img className={styles.logo} src={MCGLogo} alt='Logo' />
      </div>
    </div>
  );
}

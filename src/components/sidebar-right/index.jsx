import React, { useState } from "react";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import styles from "./styles.module.css";

export default function SideBarRight() {
  const [language, setLanguage] = useState("En");

  const handleClick = (event) => {
    const newValue = event.target.value === "En" ? "Ru" : "En";
    setLanguage(newValue);
  };

  return (
    <div className={styles.rightSidebarContainer}>
      <button
        className={styles.firstChild}
        onClick={handleClick}
        value={language}
      >
        {language}
      </button>
      <div className={styles.secondChild}>Welcome to MCG</div>
      <div className={styles.thirdChild}>
        <img src={FacebookIcon} alt='facebook' />
        <img src={InstagramIcon} alt='instagram' />
        <img src={TwitterIcon} alt='twitter' />
      </div>
    </div>
  );
}

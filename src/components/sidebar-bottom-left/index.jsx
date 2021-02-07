import React from "react";
import styles from "./styles.module.css";

export default function SideBarBottomLeft({ pageWrapId, outerContainerId }) {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarBottomItem}>
        <span className={styles.lineContainer}>
          <p className={styles.line}></p>
          <span>Scroll</span>
        </span>
        <span>to navigate</span>
      </div>
    </div>
  );
}

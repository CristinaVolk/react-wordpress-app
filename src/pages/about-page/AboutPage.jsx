import React from "react";
import AntDetailSwitch from "../../components/AntDetailSwitch/funcComp";
import styles from "./styles.module.css";

export default function AboutPage() {
  return (
    <div className={styles.detailsSwitchContainer}>
      <AntDetailSwitch />
    </div>
  );
}

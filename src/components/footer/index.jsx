import React from "react";
import FooterItem from "../footer-item";
import { menuContent } from "../../common/menuLinks";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      {menuContent.slice(1).map((contentItem) => {
        return <FooterItem key={contentItem.id} contentItem={contentItem} />;
      })}
    </div>
  );
}

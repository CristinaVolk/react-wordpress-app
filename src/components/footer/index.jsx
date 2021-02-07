import React from "react";
import { useOnResize } from "../../common/useOnResize.js";
import FooterItem from "../footer-item";
import { menuContent } from "../../common/menuLinks";
import styles from "./styles.module.css";

export default function Footer() {
  const { isMobile } = useOnResize();
  return isMobile ? null : (
    <div className={styles.footer}>
      {menuContent.slice(1).map((contentItem) => {
        return <FooterItem key={contentItem.id} contentItem={contentItem} />;
      })}
    </div>
  );
}

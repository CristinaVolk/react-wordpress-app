import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export default function FooterItem({ contentItem }) {
  const { id, text, address } = contentItem;
  return (
    <NavLink to={address} className={styles.footerLinkItem}>
      <div className={styles.footerItem}>
        <span>{text}</span>
        <span>{id}</span>
      </div>
    </NavLink>
  );
}

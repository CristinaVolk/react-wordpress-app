import React, { useState, useEffect } from "react";
import { useOnResize } from "../../common/useOnResize.js";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { ParticleEffect } from "../../components/ParticleEffect";

const sizeOnChange = 760;

export default function FooterItem({ contentItem }) {
  const { id, text, address } = contentItem;
  const { isMobile } = useOnResize(sizeOnChange);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setHidden(true);
    }
    return () => {
      setHidden(false);
    };
  }, [isMobile]);

  return isMobile ? (
    <ParticleEffect
      content={
        <NavLink to={address} className={styles.footerLinkItem}>
          <div className={styles.footerItem}>
            <span>{text}</span>
            <span>{id}</span>
          </div>
        </NavLink>
      }
      hidden={hidden}
    ></ParticleEffect>
  ) : (
    <NavLink to={address} className={styles.footerLinkItem}>
      <div className={styles.footerItem}>
        <span>{text}</span>
        <span>{id}</span>
      </div>
    </NavLink>
  );
}

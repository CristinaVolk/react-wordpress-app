import React from "react";
import { useOnResize } from "../../common/useOnResize.js";
import styles from "./styles.module.css";
import LineIcon from "../../assets/lineIcon.png";
import ArrowIcon from "../../assets/right-arrow-icon.png";

export default function MainPage() {
  const { isMobile } = useOnResize();
  return (
    <div className={styles.mainTextContainer}>
      <div className={styles.leftPartMainContainer}>
        <div className={styles.lineOne}>
          <p>01</p>
          <img className={styles.lineIcon} src={LineIcon} alt='small-line' />
          <p>02</p>
          <p>Welcome</p>
        </div>

        <p className={styles.lineTwo}>Creating Human engagement.</p>
        <p className={styles.lineThree}>through technology</p>

        <div className={styles.lineFour}>
          <img className={styles.arrowIcon} src={ArrowIcon} alt='arrow' />
          <p className={styles.textFourLine}>discover mcg</p>
        </div>
      </div>

      {isMobile ? null : (
        <div className={styles.mainLabel}>
          <div>Human</div>
          <div>Engagement</div>
        </div>
      )}
    </div>
  );
}

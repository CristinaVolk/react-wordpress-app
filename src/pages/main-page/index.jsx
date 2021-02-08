import React, { useState, useEffect } from "react";
import { ParticleEffect } from "../../components/ParticleEffect";
import { useOnResize } from "../../common/useOnResize.js";
import LineIcon from "../../assets/lineIcon.png";
import ArrowIcon from "../../assets/right-arrow-icon.png";
import styles from "./styles.module.css";

const sizeOnChange = 1000;

export default function MainPage() {
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

      {isMobile ? (
        <div className={styles.mainLabel}>
          <ParticleEffect
            content={
              <>
                <div>Human</div>
                <div>Engagement</div>
              </>
            }
            hidden={hidden}
          ></ParticleEffect>
        </div>
      ) : (
        <div className={styles.mainLabel}>
          <div>Human</div>
          <div>Engagement</div>
        </div>
      )}
    </div>
  );
}

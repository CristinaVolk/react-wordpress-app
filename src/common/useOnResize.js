import { useState, useEffect } from "react";

export const useOnResize = (criticalSize) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    onResize(criticalSize);
    window.addEventListener("resize", () => {
      setIsMobile(onResize(criticalSize));
    });
    return () => {
      window.removeEventListener("resize", () => onResize(criticalSize));
    };
  }, [criticalSize, isMobile]);
  return {
    isMobile,
  };
};

const onResize = (criticalSize) => {
  if (window.innerWidth <= criticalSize) {
    return true;
  } else {
    return false;
  }
};

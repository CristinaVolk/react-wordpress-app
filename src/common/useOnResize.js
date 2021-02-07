import { useState, useEffect } from "react";

export const useOnResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", () => {
      setIsMobile(onResize());
    });
    return () => window.removeEventListener("resize", () => onResize());
  });
  return {
    isMobile,
  };
};

const onResize = () => (window.innerWidth <= 760 ? true : false);

import { useState, useEffect } from "react";

export const useOnResize = (criticalSize) => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(criticalSize);

  useEffect(() => {
    onResize(criticalSize);
    window.addEventListener("resize", () => {
      console.log(onResize(criticalSize));
      setIsMobile(onResize(criticalSize));
    });
    return () =>
      window.removeEventListener("resize", () => onResize(criticalSize));
  });
  return {
    isMobile,
  };
};

const onResize = (criticalSize) => {
  return window.innerWidth <= criticalSize ? true : false;
};

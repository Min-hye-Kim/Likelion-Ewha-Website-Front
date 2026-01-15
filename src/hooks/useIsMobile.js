import { useState, useEffect } from "react";

/**
 * 현재 화면이 모바일 크기인지 감지하는 hook
 * matchMedia API를 사용하여 CSS 미디어 쿼리와 동일한 방식으로 감지
 * @param {number} maxWidth - 모바일로 간주할 최대 너비 (기본값: 799)
 * @returns {boolean} 화면이 모바일 크기이면 true, 아니면 false
 */
const useIsMobile = (maxWidth = 799) => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${maxWidth}px)`).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${maxWidth}px)`);
    const onChange = (e) => setIsMobile(e.matches);

    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [maxWidth]);

  return isMobile;
};

export default useIsMobile;

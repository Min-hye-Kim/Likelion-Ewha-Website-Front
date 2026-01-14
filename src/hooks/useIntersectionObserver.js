import { useState, useEffect } from "react";

/**
 * Intersection Observer를 사용하여 요소가 화면에 보이는지 감지하는 hook
 * @param {React.RefObject} ref - 감지할 요소의 ref
 * @param {Object} options - Intersection Observer 옵션
 * @param {number} options.threshold - 요소가 얼마나 보일 때 트리거할지 (0.0 ~ 1.0), 기본값 0.3
 * @returns {boolean} 요소가 화면에 보이는지 여부
 */
const useIntersectionObserver = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: options.threshold || 0.3,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options.threshold]);

  return isVisible;
};

export default useIntersectionObserver;

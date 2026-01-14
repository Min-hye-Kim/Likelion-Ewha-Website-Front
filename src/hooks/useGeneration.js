import { useMemo } from "react";

/**
 * 현재 연도를 기준으로 멋쟁이사자처럼 기수를 계산하는 hook
 * @returns {number} 현재 기수 (2025년 = 13기 기준)
 */
const useGeneration = () => {
  const generation = useMemo(() => {
    const currentYear = new Date().getFullYear();
    // 2012년이 0기 기준 (2025년 = 13기)
    return currentYear - 2012;
  }, []);

  return generation;
};

export default useGeneration;

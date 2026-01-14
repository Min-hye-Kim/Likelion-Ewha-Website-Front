/**
 * 현재 연도를 기준으로 멋쟁이사자처럼 기수를 계산하는 hook
 * @returns {number} 현재 기수 (2025년 = 13기 기준)
 */
const useGeneration = () => {
  const currentYear = new Date().getFullYear();
  // 2012년이 0기 기준 (2025년 = 13기)
  return currentYear - 2012;
};

export default useGeneration;

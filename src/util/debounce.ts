/**
 * 防抖函数
 * @param func 自定义函数
 * @param delay 延迟时间
 * @returns
 */
function debounce(func: Function, delay: number): Function {
  let timer: number;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

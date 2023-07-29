/**
 * 节流函数
 * @param func 自定义函数
 * @param interval 时间
 * @returns
 */
function throttle(func: Function, interval: number): Function {
  let timer: number | null;
  return function () {
    if (!timer) {
      func();
      timer = setTimeout(() => {
        timer = null;
      }, interval);
    }
  };
}

export default throttle;

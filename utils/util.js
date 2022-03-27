const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

/**
* @desc 函数防抖
* @param func 函数
* @param wait 延迟执行毫秒数
* @param immediate true 表立即执行，false 表非立即执行
*/
const debounce = function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      var callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait);
    }
  }
}
//节流
const throttle = function throttle(fn, time) {
  let canRun = true; // 通过闭包保存一个标记
  return function () {
    if (!canRun) return; // 在函数开头判断标记是否为 true，不为 true 则 return
    canRun = false; // 立即设置为 false
    setTimeout(() => { // 将外部传入的函数的执行放在 setTimeout 中
      fn.apply(this, arguments);           // 最后在 setTimeout 执行完毕后再把标记设置为 true(关键)表示可以执行下一 次循环了。当定时器没有执行的时候标记永远是 false，在开头被 return 掉
      canRun = true;
    }, time);
  };
}.bind(this)
module.exports = {
  formatTime,
  throttle,
  debounce
}

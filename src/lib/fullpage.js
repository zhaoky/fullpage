import arrowImg from "./../../arrow.svg";
/**
 * 触发方式
 *
 * @return {String}
 */
function actionEventFn() {
  const isSupportTouch = "ontouchend" in window.document;
  return {
    start: isSupportTouch ? "touchstart" : "mousedown",
    move: isSupportTouch ? "touchmove" : "mousemove",
    end: isSupportTouch ? "touchend" : "mouseup",
    wheel: "mousewheel"
  };
}
/**
 * 是否是PC端
 *
 * @return {Boolean}
 */
function isPc() {
  return [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod"
  ].every(function(i) {
    return navigator.userAgent.indexOf(i) < 0;
  });
}
/**
 * 是否是MAC端
 *
 * @return {Boolean}
 */
function isMac() {
  return /Mac\ OS\ X/.test(navigator.userAgent);
}
/**
 * 判断是否是字符串
 * @param {String} string
 * @return {Boolean}
 */
function isString(string) {
  return Object.prototype.toString.call(string) === "[object String]";
}
/**
 * 是否为对象
 * @param {Obejct} obj
 * @return {Boolean}
 */
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
/**
 * 是否为函数
 * @param {Obejct} obj
 * @return {Boolean}
 */
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === "[object Function]";
}
/**
 * 阻止移动端下拉效果
 *
 * @export
 */
function stopDropDown() {
  const pc = isPc();
  const actionEvent = actionEventFn();

  document.querySelector("body").addEventListener(
    actionEvent.start,
    ev => {
      if (pc || (!pc && ev.target.nodeName == "A")) {
        return;
      }
      ev.preventDefault();
    },
    { passive: false }
  );
}
/**
 * 节流函数
 *
 * @export
 * @param {Function} fn
 * @param {Number} time
 * @return {Function}
 */
function throttleGenerator(fn, time) {
  let date = new Date();
  return function(...args) {
    const nowDate = new Date();
    if (nowDate - date > time) {
      fn(...args);
      date = nowDate;
    }
  };
}
/**
 * head插入style内容
 *
 * @param {String} html
 */
function createStyle(html) {
  const style = document.createElement("style");
  style.innerHTML = html;
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}
/**
 * 兼容Firefox滚轮事件
 *
 * @param {Object} event
 * @return {Number}
 */
function getWheelDelta(event) {
  return event.wheelDelta || -event.detail * 24;
}
// ---------------------------------------
// ---------------------------------------

/**
 * Fullpage构造函数
 *
 * @class Fullpage
 */
export class Fullpage {
  /**
   * Creates an instance of Fullpage.
   * @param {Object} options
   * @memberof Fullpage
   */
  constructor(options) {
    if (!isObject(options)) {
      throw Error("Options must be object.");
    }

    this.options = options;

    const root = this.options.root;
    if (!isString(root) || (isString(root) && root.charAt(0) !== "#")) {
      throw Error("Options.root must be Id (eg: #fullpage)");
    }

    this.rootDom = document.getElementById(root.substr(1));

    this.rootDom.classList.add("fp-root");

    this.nodeList = this.rootDom.children;
    this.nodeListLen = this.nodeList.length;

    if (!this.nodeListLen) {
      throw Error("No list elements were found under root");
    }

    Array.from(this.nodeList).map(item => {
      item.classList.add("fp-section");
    });

    this.speedTime = +this.options.speedTime || 0.5;

    const style = `
    .fp-section{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      display: none;
    }
    .fp-root{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      overflow: hidden;
    }
    .fp-prev-page{
      transform: translateY(-100%);
      display: block;
    }
    .fp-cur-page{
      z-index: 10;
      display: block;
    }
    .fp-touch-page{
      z-index: 20;
      -webkit-backface-visibility: hidden; //优化android卡顿
    }
    .fp-next-page{
      transform: translateY(100%);
      display: block;
    }
    .fp-active{
      transition: transform ${this.speedTime}s;
      transform: translateY(0) !important;
      z-index: 100;
      display: block;
    }
    `;

    createStyle(style);

    this.actionEvent = actionEventFn();

    this.moving = false;
    this.isInit = true;
    this.webkitTransitionEndHandler = null;
    this.touchMoveHandlerFn = null;
    this.touchEndHandlerFn = null;
    this.startTouchY = this.disY = this.curIndex = this.oldPageIndex = 0;

    this.init();
  }
  /**
   * 初始化
   *
   * @memberof Fullpage
   */
  init() {
    const mac = isMac();

    stopDropDown();

    this.options.hasArrow && this.createArrowDom();

    this.resetAttr();

    this.isInit = false;

    ["mousewheel", "DOMMouseScroll"].forEach(item => {
      this.rootDom.addEventListener(
        item,
        throttleGenerator(this.startWheelHandler.bind(this), mac ? 1200 : 100)
      );
    });

    if (this.actionEvent.start === "mousedown") {
      return;
    }
    this.rootDom.addEventListener(
      this.actionEvent.start,
      this.touchStartHandler.bind(this)
    );
  }
  /**
   * 创建上拉箭头
   *
   * @memberof Fullpage
   */
  createArrowDom() {
    const arrowDom = document.createElement("div");
    arrowDom.classList = "fp-arrow";
    const style = `
    .fp-arrow {
      position: absolute;
      bottom: 20px;
      width: 20px;
      height: 35px;
      left: 50%;
      z-index: 100;
      background: url(${arrowImg}) no-repeat bottom center;
      background-size: contain;
      pointer-events: none;
      transform: translateX(-50%);
      animation: arrowAnimate 1.5s ease-in-out infinite;
    }
    @keyframes arrowAnimate {
      0% {
        bottom: 10px;
        opacity: 0.8;
      }
      50% {
        bottom: 20px;
        opacity: 1;
      }
      80% {
        bottom: 22px;
        opacity: 0.4;
      }
      100% {
        bottom: 22px;
        opacity: 0;
      }
    }
  `;
    createStyle(style);

    this.rootDom.appendChild(arrowDom);
  }
  /**
   * 滑轮滚动事件
   *
   * @param {Event} e
   */
  startWheelHandler(e) {
    const wheelDelta = getWheelDelta(e);
    if (
      this.moving ||
      (wheelDelta < 0 && this.curIndex === this.nodeListLen - 1) ||
      (wheelDelta > 0 && this.curIndex === 0)
    ) {
      return;
    }
    this.oldPageIndex = this.curIndex;
    wheelDelta < 0 ? this.curIndex++ : this.curIndex--;
    this.applyPageIndex();
  }
  /**
   * 触摸start事件
   *
   * @param {Event} e
   */
  touchStartHandler(e) {
    if (this.moving) {
      return;
    }

    this.startTouchY = Array.from(e.changedTouches)[0].pageY;
    this.oldPageIndex = this.curIndex;

    this.rootDom.addEventListener(
      this.actionEvent.move,
      (this.touchMoveHandlerFn = this.touchMoveHandler.bind(this))
    );
    this.rootDom.addEventListener(
      this.actionEvent.end,
      (this.touchEndHandlerFn = this.touchEndHandler.bind(this))
    );
  }
  /**
   * 触摸move事件
   *
   * @param {Event} e
   */
  touchMoveHandler(e) {
    if (this.moving) {
      return;
    }

    this.disY = Array.from(e.changedTouches)[0].pageY - this.startTouchY; // 为负上滑 为正下滑

    if (this.disY < 0) {
      this.curIndex = this.oldPageIndex + 1;
    } else if (this.disY > 0) {
      this.curIndex = this.oldPageIndex - 1;
    } else {
      return;
    }

    if (
      (this.disY < 0 && this.oldPageIndex === this.nodeListLen - 1) ||
      (this.disY > 0 && this.oldPageIndex === 0)
    ) {
      return;
    }
    this.nodeList[this.curIndex].classList.add("fp-touch-page");
    this.nodeList[this.curIndex].style.transform = `translateY(${(this.disY < 0
      ? this.rootDom.offsetHeight
      : -this.rootDom.offsetHeight) + this.disY}px)`;
    this.nodeList[
      this.disY < 0 ? this.curIndex - 1 : this.curIndex + 1
    ].style.transform = `translateY(${this.disY}px)`;
  }
  /**
   * 触摸end事件
   *
   */
  touchEndHandler() {
    if (this.moving) {
      return;
    }
    if (
      (this.disY < 0 && this.oldPageIndex === this.nodeListLen - 1) ||
      (this.disY > 0 && this.oldPageIndex === 0)
    ) {
      this.disY < 0 ? --this.curIndex : ++this.curIndex;
      this.resetAttr();
      return;
    }

    if (Math.abs(this.disY) < 100) {
      if (this.disY !== 0) {
        this.littleBounce();
      } else {
        this.resetAttr();
      }
    } else {
      this.applyPageIndex();
    }
  }
  /**
   * 回弹效果
   *
   */
  littleBounce() {
    if (this.moving) {
      return;
    }
    this.moving = true;
    this.nodeList[this.curIndex].style.transform = "";
    this.nodeList[this.curIndex].style.transition = `transform ${
      this.speedTime
    }s`;

    this.nodeList[
      this.disY < 0 ? this.curIndex - 1 : this.curIndex + 1
    ].style.transform = "";
    this.nodeList[
      this.disY < 0 ? this.curIndex - 1 : this.curIndex + 1
    ].style.transition = `transform ${this.speedTime}s`;

    this.curIndex = this.disY > 0 ? this.curIndex + 1 : this.curIndex - 1;

    this.nodeList[this.curIndex].addEventListener(
      "webkitTransitionEnd",
      (this.webkitTransitionEndHandler = this.resetAttr.bind(this))
    );
  }
  /**
   * 更新状态
   *
   */
  applyPageIndex() {
    if (this.moving) {
      return;
    }

    this.moving = true;
    let promise;
    if (Math.abs(this.curIndex - this.oldPageIndex) > 1) {
      promise = new Promise((resolve, reject) => {
        this.nodeList[this.curIndex].style.display = "block";
        this.nodeList[this.curIndex].style.transform = `translateY(${
          this.curIndex < this.oldPageIndex ? "-" : ""
        }100%)`;
        setTimeout(() => {
          resolve();
        }, 50);
      });
    }

    this.nodeList[this.oldPageIndex].style.transform = `translateY(${
      this.curIndex > this.oldPageIndex ? "-" : ""
    }100%)`;
    this.nodeList[this.oldPageIndex].style.transition = `transform ${
      this.speedTime
    }s`;

    if (promise) {
      promise.then(() => {
        this.applyHandler();
      });
    } else {
      this.applyHandler();
    }
  }
  /**
   * 启动自过渡
   *
   * @memberof Fullpage
   */
  applyHandler() {
    this.nodeList[this.curIndex].classList.add("fp-active");

    this.nodeList[this.curIndex].addEventListener(
      "webkitTransitionEnd",
      (this.webkitTransitionEndHandler = this.resetAttr.bind(this))
    );
  }
  /**
   * 锚点
   *
   * @param {Number} index
   */
  directToPage(index) {
    this.oldPageIndex = this.curIndex;
    this.curIndex = index;
    this.applyPageIndex();
  }
  /**
   * 状态重置
   *
   * @memberof Fullpage
   */
  resetAttr() {
    Array.from(this.nodeList).map(item => {
      item.classList.remove(
        "fp-prev-page",
        "fp-active",
        "fp-next-page",
        "fp-cur-page",
        "fp-touch-page"
      );

      item.style.transform = "";
      item.style.transition = "";

      item.removeEventListener(
        "webkitTransitionEnd",
        this.webkitTransitionEndHandler
      );
    });

    this.nodeList[this.curIndex].classList.add("fp-cur-page");
    this.curIndex !== 0 &&
      this.nodeList[this.curIndex - 1].classList.add("fp-prev-page");
    this.curIndex !== this.nodeListLen - 1 &&
      this.nodeList[this.curIndex + 1].classList.add("fp-next-page");

    this.moving = false;

    this.rootDom.removeEventListener(
      this.actionEvent.move,
      this.touchMoveHandlerFn
    );
    this.rootDom.removeEventListener(
      this.actionEvent.end,
      this.touchEndHandlerFn
    );

    this.startTouchY = this.disY = 0;

    document.getElementsByClassName("fp-arrow")[0].style.display =
      this.curIndex === this.nodeListLen - 1 ? "none" : "block";

    const slideCallback = this.options.slideCallback;
    if (!this.isInit && !!slideCallback && isFunction(slideCallback)) {
      slideCallback(this.curIndex);
    }
  }
}

import { Fullpage } from "./lib/fullpage.js";

new Fullpage({
  root: "#fullpage",
  hasArrow: true,
  speedTime: 0.5,
  slideCallback(i) {
    console.log("当前pageindex：", i);
  }
});

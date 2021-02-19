/*
 * @Author: Vincent
 * @Date: 2021-01-25 14:42:07
 * @LastEditTime: 2021-01-26 10:36:43
 * @LastEditors: Vincent
 * @Description:
 */
(function (psdw) {
  let dpr = 0;
  let rem = 0;
  let scale = 0;
  const htmlDOM = document.documentElement;
  dpr = window.devicePixelRatio;
  console.log(dpr);
  const currentWidth = htmlDOM.clientWidth;
  console.log(currentWidth);
  scale = currentWidth / psdw;
  rem = psdw / 10;
  rem = rem * scale;
  console.log(rem);
  htmlDOM.style.fontSize = `${rem}px`;
  htmlDOM.setAttribute('data-dpr', dpr);
})(750);

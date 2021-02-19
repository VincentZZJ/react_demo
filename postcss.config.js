/*
 * @Author: Vincent
 * @Date: 2021-01-13 11:19:20
 * @LastEditTime: 2021-01-26 14:49:35
 * @LastEditors: Vincent
 * @Description:
 */
// const autoprefixer = require('autoprefixer');
// const px2rem = require('postcss-px2rem');

module.exports = {
  plugins: [
    // 'postcss-flexbugs-fixes',
    require('autoprefixer')({
      overrideBrowserslist: ['last 5 version', '>1%', 'ie 11'],
    }),
    require('postcss-px2rem')({ remUnit: 75 }), // 设计稿根据750px(iphone6)
    // px2rem({ remUnit: 75 }),
  ],
};

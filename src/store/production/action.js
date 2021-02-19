/*
 * @Author: Vincent
 * @Date: 2021-01-29 15:11:00
 * @LastEditTime: 2021-02-03 14:05:36
 * @LastEditors: Vincent
 * @Description:
 */

import * as AT from './action-type';

// 获取已选中的产品信息
export const getSelectedPro = () => {
  return {
    type: AT.GETSELECTEDPRO,
  };
};

// 更新选中的产品信息
export const updateSelectedPro = (data) => {
  return {
    type: AT.UPDATESELECTEDPRO,
    payload: data,
  };
};

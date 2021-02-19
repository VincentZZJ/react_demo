/*
 * @Author: Vincent
 * @Date: 2021-01-28 10:10:35
 * @LastEditTime: 2021-02-04 14:42:20
 * @LastEditors: Vincent
 * @Description:
 */
import * as AT from './action-type';

// 提交表单信息
export const formInfoSubmit = (params) => {
  return {
    type: AT.FORMINFOSUBMIT,
    payload: params,
  };
};

// 更新表单信息
export const formInfoUpdate = (params) => {
  return {
    type: AT.FORMINFOUPDATE,
    ...params,
  };
};

// 清空表单信息
export const clearFormInfo = () => {
  return {
    type: AT.CLEARDATA,
  };
};

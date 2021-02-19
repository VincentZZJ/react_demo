/*
 * @Author: Vincent
 * @Date: 2021-01-28 10:10:46
 * @LastEditTime: 2021-02-04 14:42:40
 * @LastEditors: Vincent
 * @Description:
 */
import * as AT from './action-type';

const defaultState = {
  money: '',
  name: '',
  phone: '',
};

export const homeState = (state = defaultState, action) => {
  switch (action.type) {
    case AT.FORMINFOUPDATE:
      return {
        ...state,
        ...{ [action.key]: action.value },
      };
    case AT.CLEARDATA:
      return {
        ...state,
        ...defaultState,
      };
    default:
      return state;
  }
};

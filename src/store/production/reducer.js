/*
 * @Author: Vincent
 * @Date: 2021-01-29 15:11:05
 * @LastEditTime: 2021-02-03 14:08:37
 * @LastEditors: Vincent
 * @Description:
 */
import * as AT from './action-type';

const defaultState = {
  selectedPro: [],
};

export const productionState = (state = defaultState, action = {}) => {
  switch (action.type) {
    case AT.GETSELECTEDPRO:
      return { ...state };
    case AT.UPDATESELECTEDPRO:
      return { ...state, ...{ selectedPro: action.payload } };
    default:
      return state;
  }
};

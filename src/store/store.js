/*
 * @Author: Vincent
 * @Date: 2021-01-12 11:23:38
 * @LastEditTime: 2021-02-04 14:19:38
 * @LastEditors: Vincent
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as page1State from './page1/reducer';
import * as page2State from './page2/reducer';
import * as productionState from './production/reducer';
import * as homeState from './home/reducer';

const store = createStore(
  combineReducers({ ...page1State, ...page2State, ...productionState, ...homeState }),
  applyMiddleware(thunk),
);

export default store;

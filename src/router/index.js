/*
 * @Author: Vincent
 * @Date: 2021-01-12 10:28:24
 * @LastEditTime: 2021-02-19 10:00:32
 * @LastEditors: Vincent
 * @Description:
 */
import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '@/utils/asyncComponent';

const page1 = asyncComponent(() => import('@/pages/Page1/index.jsx'));
const page2 = asyncComponent(() => import('@/pages/Page2/index.jsx'));
const home = asyncComponent(() => import('@/pages/home/home.jsx'));
const production = asyncComponent(() => import('@/pages/production/index.jsx'));
const record = asyncComponent(() => import('@/pages/record/index.jsx'));

export default class RouteConfig extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" exact component={home} />
          <Route path="/production" component={production} />
          <Route path="/record" component={record} />
          <Route path="/page1" component={page1} />
          <Route path="/page2" component={page2} />
          <Redirect exact from="/" to="/home" />
          {/* <Route component={page1} /> */}
        </Switch>
      </HashRouter>
    );
  }
}

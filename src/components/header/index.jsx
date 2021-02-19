import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { NavLink } from 'react-router-dom';
import currentStyle from './index.less';

class PublicHeader extends React.Component {
  state = {
    showNav: false,
  };

  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  // css动画组件设置为目标组件
  FirstChild = (props) => {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  };

  render() {
    const { showNav } = this.state;
    const { title, rightContent, rightFun } = this.props;
    return (
      <>
        <header className={currentStyle.headerComtainer}>
          <span onClick={this.toggleNav}>菜单</span>
          <span>{title}</span>
          <span onClick={() => (rightContent !== '' ? rightFun() : null)}>{rightContent}</span>
        </header>
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {showNav ? (
            <aside key="nav-slide" className={currentStyle.navSlideList}>
              <NavLink to="/home" exact>
                首页
              </NavLink>
              <NavLink to="/page1" exact>
                页面1
              </NavLink>
              <NavLink to="/page2" exact>
                页面2
              </NavLink>
            </aside>
          ) : null}
        </ReactCSSTransitionGroup>
      </>
    );
  }
}

export default PublicHeader;

import React from 'react';
import currentStyle from './index.less';

class DetailsList extends React.Component {
  render() {
    const {
      itemInfo: {
        time = '',
        status = 1,
        username = '',
        production = '',
        money = '',
        commission = '',
      },
    } = this.props;
    return (
      <div className={currentStyle.listBox}>
        <div className={currentStyle.boxTop}>
          <div>创建时间:{time}</div>
          <div className={status == 1 ? currentStyle.green : ''}>
            {status ? (status == 1 ? '已通过' : '未审核') : '未通过'}
          </div>
        </div>
        <div className={currentStyle.boxContent}>
          <div>
            <span>用户名：</span>
            {username}
          </div>
          <div>
            <span>商 品：</span>
            {production}
          </div>
          <div>
            <span>金 额：</span>
            {money}
          </div>
          <div>
            <span>佣 金：</span>
            {commission}
          </div>
        </div>
        <div className={currentStyle.boxBottom}>
          {status
            ? status == 1
              ? '佣金已发放，注意查收'
              : '等待管理员审核'
            : '审核不通过，请联系管理员'}
        </div>
      </div>
    );
  }
}

export default DetailsList;

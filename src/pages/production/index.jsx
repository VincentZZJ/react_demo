import React from 'react';
import Immutable from 'immutable';
import { updateSelectedPro } from '@/store/production/action.js';
import { connect } from 'react-redux';
import API from '@/api/api';
import PublicHeader from '@/components/header';
import currentStyle from './index.less';

class ProductionPage extends React.Component {
  state = {
    productionsList: [
      {
        id: '101',
        productionName: '小米3',
        productionNum: 10,
        money: '1999',
        selectStatus: false,
      },
      {
        id: '102',
        productionName: '小米6',
        productionNum: 10,
        money: '2999',
        selectStatus: false,
      },
      {
        id: '103',
        productionName: '小米10',
        productionNum: 10,
        money: '3999',
        selectStatus: false,
      },
    ],
  };

  componentDidMount() {
    // this.getProductionsList();
  }

  /**
   * @description: 获取产品列表
   * @param {*}
   * @return {*}
   */
  getProductionsList = async () => {
    try {
      const result = await API.getProductions();
      if (result && result.code === '0') {
        this.setState({
          productionsList: result.msg,
        });
      }
    } catch (err) {
      throw err;
    }
  };

  /**
   * @description: 数量变化
   * @param {*}
   * @return {*}
   */
  togNumChange = (id, num, type) => {
    const { productionsList } = this.state;
    let _num = num;
    switch (type) {
      case 'del':
        _num = num > 0 ? num - 1 : 0;
        break;
      case 'add':
        _num++;
        break;
      default:
        _num;
        break;
    }
    let $imuProductionList = Immutable.fromJS(productionsList);
    for (let i = 0; i < productionsList.length; i++) {
      $imuProductionList = $imuProductionList.update(i, (item) => {
        let _item = item;
        if (id === item.get('id')) {
          _item = item.set('productionNum', _num);
        }
        return _item;
      });
    }
    this.setState({
      productionsList: $imuProductionList.toJS(),
    });
  };

  /**
   * @description: 选中产品
   * @param {*}
   * @return {*}
   */
  togSelect = (id, status) => {
    const { productionsList } = this.state;
    let $imuProductionList = Immutable.fromJS(productionsList);
    for (let i = 0; i < productionsList.length; i++) {
      $imuProductionList = $imuProductionList.update(i, (item) => {
        let _item = item;
        if (id === item.get('id')) {
          _item = item.set('selectStatus', !status);
        }
        return _item;
      });
    }
    this.setState({
      productionsList: $imuProductionList.toJS(),
    });
  };

  /**
   * @description: 产品选中确定
   * @param {*}
   * @return {*}
   */
  selectConfirm = () => {
    const { productionsList } = this.state;
    const { updateSelectedPro } = this.props;
    const selectedPro = productionsList.filter((item) => item.selectStatus);
    updateSelectedPro(selectedPro);
    const { protocol, host } = window.location;
    const localhost = `${protocol}//${host}`;
    window.location.replace(`${localhost}/#/home`);
  };

  render() {
    const { productionsList = [] } = this.state;
    return (
      <main className={currentStyle.proContainer}>
        <PublicHeader title="首页" rightContent="确定" rightFun={this.selectConfirm} />
        <section className={currentStyle.proBox}>
          <ul>
            {productionsList && productionsList.length > 0 ? (
              productionsList.map((item, index) => {
                return (
                  <li key={`pro_${index}`} className={currentStyle.itemLi}>
                    <div>
                      <span
                        className={`${currentStyle.selectBtn} ${
                          item.selectStatus ? currentStyle.selected : ''
                        }`}
                        onClick={() => this.togSelect(item.id, item.selectStatus)}
                      ></span>
                      <span>{item.productionName}</span>
                    </div>
                    <div>
                      <span
                        className={`${currentStyle.numBtn} ${
                          item.productionNum < 1 ? currentStyle.numBtnDisabled : ''
                        }`}
                        onClick={() => this.togNumChange(item.id, item.productionNum, 'del')}
                      >
                        -
                      </span>
                      <span>{item.productionNum}</span>
                      <span
                        className={currentStyle.numBtn}
                        onClick={() => this.togNumChange(item.id, item.productionNum, 'add')}
                      >
                        +
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <li className={currentStyle.itemLi}>暂无产品</li>
            )}
          </ul>
        </section>
      </main>
    );
  }
}

export default connect(
  () => {
    return {};
  },
  (dispatch) => ({
    updateSelectedPro: (data) => dispatch(updateSelectedPro(data)),
  }),
)(ProductionPage);

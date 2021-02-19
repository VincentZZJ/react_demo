import React from 'react';
import { Link } from 'react-router-dom';
import PublicHeader from '@/components/header';
import { connect } from 'react-redux';
import { formInfoUpdate, clearFormInfo } from '@/store/home/action';
import { updateSelectedPro } from '@/store/production/action';
import { message } from 'antd';
import API from '@/api/api';
import { is, fromJS } from 'immutable';
import currentStyle from './home.less';

// const InitFormInfo = {
//   money: '',
//   name: '',
//   phone: '',
// };

class Home extends React.Component {
  state = {
    imgPreview: '',
  };

  // componentDidMount() {
  //   this.initProData();
  // }

  /**
   * @description:表单的更新，保存在state中
   * @param {object}事件对象
   * @param {string}数据类型(money|name|phone)
   */
  formInfoChange = (ev, key) => {
    const { updateFormInfo } = this.props;
    let value = ev.target.value;
    updateFormInfo({ key, value });
  };

  /**
   * @description:提交表单
   * @param {*}
   * @return {*}
   */
  handleSubmit = async () => {
    const { selectedPro, formInfo, clearFormInfo, updateSelectedPro } = this.props;
    const { imgPreview } = this.state;
    let result = await API.formInfoSubmit({ ...formInfo, imgPreview, selectedPro });
    if (result && result.code === '0') {
      message.success('提交成功');
      clearFormInfo();
      updateSelectedPro([]);
      this.setState({
        imgPreview: '',
      });
    }
  };

  /**
   * @description:处理图片上传
   * @param {*}
   * @return {*}
   */
  handleFileUpload = async (event) => {
    try {
      let imgFile = event.target.files[0];
      const imgReader = new FileReader();
      imgReader.readAsDataURL(imgFile);
      imgReader.onload = (res) => {
        this.setState({
          imgPreview: res.target.result,
        });
      };
    } catch (err) {
      message.error('上传失败！');
      console.log(err);
    }
  };

  /**
   * @description:判断组件是否需要重绘
   * @param {object}nextProps:更新后的props
   * @param {object}nextState:更新后的state
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  /**
   * @description:跳到记录页面
   * @param {*}
   * @return {*}
   */
  goHistory = () => {
    window.location.hash = '#/record';
  };

  render() {
    const {
      selectedPro,
      formInfo: { name = '', phone = '', money = '' },
    } = this.props;
    const { imgPreview = '' } = this.state;
    return (
      <main className={currentStyle.homeContainer}>
        <PublicHeader title="首页" rightContent="记录" rightFun={this.goHistory} />
        <p className={currentStyle.formTitle}>请录入您的信息</p>
        <form className={currentStyle.homeForm}>
          <div className={currentStyle.homeFormItem}>
            <span>销售金额：</span>
            <input
              type="text"
              placeholder="请输入订单金额"
              value={money}
              onChange={(event) => this.formInfoChange(event, 'money')}
            />
          </div>
          <div className={currentStyle.homeFormItem}>
            <span>客户姓名：</span>
            <input
              type="text"
              placeholder="请输入客户姓名"
              value={name}
              onChange={(event) => this.formInfoChange(event, 'name')}
            />
          </div>
          <div className={currentStyle.homeFormItem}>
            <span>客户电话：</span>
            <input
              type="text"
              maxLength="13"
              placeholder="请输入客户电话"
              value={phone}
              onChange={(event) => this.formInfoChange(event, 'phone')}
            />
          </div>
        </form>
        <div>
          <p className={currentStyle.formTitle}>请选择销售的产品</p>
          <Link to="/production" className={currentStyle.homeSelectBtn}>
            {selectedPro && selectedPro.length > 0 ? (
              <ul className={currentStyle.homeProList}>
                <li>
                  <span>序号</span>
                  <span>商品</span>
                  <span>单价</span>
                  <span>数量</span>
                </li>
                {selectedPro.map((item, index) => {
                  return (
                    <li key={`pro_${index}`}>
                      <span>{index + 1}</span>
                      <span>{item.productionName}</span>
                      <span>{`￥${item.money}`}</span>
                      <span>{`${item.productionNum}`}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <span>选择产品</span>
            )}
          </Link>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p className={currentStyle.formTitle}>请上传发票凭证</p>
          <div className={currentStyle.homeFileUploadBtn}>
            <span className={currentStyle.homeSelectBtn}>上传图片</span>
            <input type="file" onChange={(event) => this.handleFileUpload(event)} />
          </div>
          {imgPreview ? <img src={imgPreview} alt="" className={currentStyle.imgPreview} /> : null}
        </div>
        <div className={currentStyle.homeSubmitBtn} onClick={this.handleSubmit}>
          提交
        </div>
      </main>
    );
  }
}

export default connect(
  (state) => ({
    selectedPro: state.productionState.selectedPro,
    formInfo: state.homeState,
  }),
  (dispatch) => ({
    updateFormInfo: (params) => dispatch(formInfoUpdate(params)),
    clearFormInfo: () => dispatch(clearFormInfo()),
    updateSelectedPro: (data) => dispatch(updateSelectedPro(data)),
  }),
)(Home);

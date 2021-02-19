/*
 * @Author: Vincent
 * @Date: 2021-01-28 14:47:37
 * @LastEditTime: 2021-02-19 10:38:07
 * @LastEditors: Vincent
 * @Description:
 */
import Server from './server';

class API extends Server {
  // 错误信息输出
  errMsg = (data) => {
    return {
      ...data,
    };
  };

  /**
   *  用途：表单提交
   *  @url /api/formInfoSubmit
   *  返回status为1表示成功
   *  @method post
   *  @return {promise}
   */
  async formInfoSubmit(params = {}) {
    try {
      let result = await this.axios('post', '/api/formInfoSubmit', params);
      if (result) {
        return result;
      } else {
        // let err = {
        //   tip: '表单信息提交失败',
        //   response: result,
        //   data: params,
        //   url: '/api/formInfoSubmit',
        // };
        let err = this.errMsg('表单信息提交失败', result, params, '/api/formInfoSubmit');
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }

  // 查询记录
  async getRecordList(params = {}) {
    try {
      let result = await this.axios('get', '/api/getRecordList', params);
      if (result) {
        return result;
      } else {
        let err = this.errMsg('查询记录失败', result, params, '/api/getRecordList');
        throw err;
      }
    } catch (err) {
      throw err;
    }
  }
}

export default new API();

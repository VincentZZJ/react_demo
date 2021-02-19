/*
 * @Author: Vincent
 * @Date: 2021-01-28 17:22:36
 * @LastEditTime: 2021-02-19 10:50:20
 * @LastEditors: Vincent
 * @Description:
 */
/**
 * @description: 上传订单信息
 * @param {*}
 * @return {*}
 */
const getSearchData = (req, res) => {
  res.json({
    code: '0',
    desc: 'success',
  });
};

/**
 * @description: 获取已选产品信息
 * @param {*}
 * @return {*}
 */

/**
 * @description: 获取记录
 * @param {*}
 * @return {*}
 */
const getRecordList = (req, res) => {
  res.json({
    code: '0',
    desc: 'success',
    msg: {
      passed: [
        {
          status: 1,
          username: 'mary',
          production: 'ipad mini5',
          money: '2899',
          commission: '200',
          time: '2021-02-19 13:22:11',
        },
        {
          status: 1,
          username: 'tom',
          production: '小米10',
          money: '3899',
          commission: '400',
          time: '2021-02-11 11:02:11',
        },
        {
          status: 1,
          username: 'jack',
          production: 'iphone 12',
          money: '8899',
          commission: '600',
          time: '2021-02-09 13:12:11',
        },
      ],
      noPassed: [
        {
          status: 0,
          username: 'mary',
          production: 'ipad mini5',
          money: '2899',
          commission: '200',
          time: '2021-02-19 13:22:11',
        },
      ],
      noHandle: [
        {
          status: 2,
          username: 'tom',
          production: '小米10',
          money: '3899',
          commission: '400',
          time: '2021-02-11 11:02:11',
        },
        {
          status: 2,
          username: 'jack',
          production: 'iphone 12',
          money: '8899',
          commission: '600',
          time: '2021-02-09 13:12:11',
        },
      ],
    },
  });
};

module.exports = {
  'POST /api/formInfoSubmit': getSearchData,
  'GET /api/getRecordList': getRecordList,
};

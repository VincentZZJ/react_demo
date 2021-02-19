import React from 'react';
import API from '@/api/api';
import { Tabs } from 'antd';
import PublicHeader from '@/components/header';
import DetailItem from '@/components/detailList';
import currentStyle from './index.less';

const { TabPane } = Tabs;

class RecordPage extends React.Component {
  state = {
    recordList: [],
  };

  componentDidMount() {
    this.getRecordList();
  }

  getRecordList = async () => {
    try {
      const result = await API.getRecordList();
      if (result && result.code === '0' && result.msg) {
        this.setState({
          recordList: result.msg,
        });
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  render() {
    const {
      recordList: { passed = [], noPassed = [], noHandle = [] },
    } = this.state;
    return (
      <main className={currentStyle.recordContainer}>
        <PublicHeader title="记录" />
        <section>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane className={currentStyle.tabCls} tab="已通过" key="1">
              {passed.map((item) => (
                <DetailItem itemInfo={item} />
              ))}
            </TabPane>
            <TabPane className={currentStyle.tabCls} tab="待审核" key="2">
              {noHandle.map((item) => (
                <DetailItem itemInfo={item} />
              ))}
            </TabPane>
            <TabPane className={currentStyle.tabCls} tab="未通过" key="3">
              {noPassed.map((item) => (
                <DetailItem itemInfo={item} />
              ))}
            </TabPane>
          </Tabs>
        </section>
      </main>
    );
  }
}

export default RecordPage;

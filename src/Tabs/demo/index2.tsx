import React from 'react';
import Tabs from '../Tabs';
import TabPane from '../TabPane';
export default () => {
  return (
    <Tabs type="card">
      <TabPane name="tab栏1">
        <div style={{ height: '100px' }}>tab栏1</div>
      </TabPane>
      <TabPane name="tab栏2">
        <div style={{ height: '100px' }}>tab栏2</div>
      </TabPane>
      <TabPane name="tab栏3">
        <div style={{ height: '100px' }}>tab栏3</div>
      </TabPane>
      <TabPane name="tab栏4">
        <div style={{ height: '100px' }}>tab栏4</div>
      </TabPane>
    </Tabs>
  );
};

import React from 'react';
import Link from '../index';

export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link type="text">默认链接</Link>
      <Link type="primary">主要链接</Link>
      <Link type="success">成功链接</Link>
      <Link type="danger">危险链接</Link>
      <Link type="warning">警告链接</Link>
      <Link type="info">信息链接</Link>
    </div>
  );
}

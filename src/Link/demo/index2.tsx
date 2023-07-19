import React from 'react';
import Link from '../index';

export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link type="text" disabled={true}>
        默认链接
      </Link>
      <Link type="primary" disabled={true}>
        基础链接
      </Link>
      <Link type="success" disabled={true}>
        成功链接
      </Link>
      <Link type="danger" disabled={true}>
        危险链接
      </Link>
      <Link type="warning" disabled={true}>
        警告链接
      </Link>
      <Link type="info" disabled={true}>
        信息链接
      </Link>
    </div>
  );
}

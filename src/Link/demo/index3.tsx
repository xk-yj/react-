import React from 'react';
import Link from '../index';

export default function LinkDemo1() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link underline={true}>有下划线</Link>
      <Link underline={false}>无下划线</Link>
    </div>
  );
}

import React from 'react';
import Loading from '..';

export default function AvatarDemo() {
  return (
    <div style={{ width: '100%', height: '200px', backgroundColor: '#f2f2f5' }}>
      <Loading backColor="rgba(0,0,0,.2)" center size="sm" text="加载中..." />
    </div>
  );
}

import React from 'react';
import Loading from '..';

export default function AvatarDemo() {
  return (
    <div>
      <div style={{ height: '100px', borderBottom: '1px solid #b1b3b8' }}>
        <Loading size="xs" text="xsmall" />
      </div>
      <div style={{ height: '120px', borderBottom: '1px solid #b1b3b8' }}>
        <Loading size="sm" text="small" />
      </div>
      <div style={{ height: '140px', borderBottom: '1px solid #b1b3b8' }}>
        <Loading size="md" text="medium" />
      </div>
      <div style={{ height: '160px' }}>
        <Loading size="lg" text="large" />
      </div>
    </div>
  );
}

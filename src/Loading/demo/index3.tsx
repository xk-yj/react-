import React from 'react';
import Loading from '..';

export default function AvatarDemo() {
  return (
    <div>
      <div style={{ height: '100px' }}>
        <Loading size="xs" text="xsmall" />
        <hr />
      </div>
      <div style={{ height: '100px' }}>
        <Loading size="sm" text="small" />
        <hr />
      </div>
      <div style={{ height: '100px' }}>
        <Loading size="md" text="medium" />
        <hr />
      </div>
      <div style={{ height: '100px' }}>
        <Loading size="lg" text="large" />
      </div>
    </div>
  );
}

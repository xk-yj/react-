import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return (
    <div>
      <Alert type="Success" closable></Alert>
      <Alert type="Info" closeText="知道了"></Alert>
      <Alert type="Warning"></Alert>
    </div>
  );
}

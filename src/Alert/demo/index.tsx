import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return (
    <div>
      <Alert type="Success"></Alert>
      <Alert type="Info"></Alert>
      <Alert type="Warning"></Alert>
      <Alert type="error"></Alert>
    </div>
  );
}

import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return (
    <div>
      <Alert center type="Success" title="成功提示的文案"></Alert>
      <Alert center type="Info" title="消息提示的文案"></Alert>
      <Alert center type="Warning" title="警告提示的文案"></Alert>
      <Alert center type="error" title="失败提示的文案"></Alert>
    </div>
  );
}

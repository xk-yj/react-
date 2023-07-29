import React from 'react';
import Alert from '..';
export default function AlertDemo() {
  return (
    <div>
      <Alert type="Success" LimeGreen title="成功提示的文案"></Alert>
      <Alert type="Info" Goldenrod title="消息提示的文案"></Alert>
      <Alert type="Warning" CoolGray title="警告提示的文案"></Alert>
      <Alert type="error" Coral title="失败提示的文案"></Alert>
    </div>
  );
}

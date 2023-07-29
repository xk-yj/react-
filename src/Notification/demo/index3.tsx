import React from 'react';
import BwNotification from '..';
import Button from '../../Button';
export default function NotificationDemo() {
  return (
    <div>
      <BwNotification
        requireInteraction={true}
        icon="https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg.ico"
        info="第一次尝试"
        message="kukkukuk"
      >
        <Button>显示通知</Button>
      </BwNotification>
    </div>
  );
}

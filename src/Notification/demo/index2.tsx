import React from 'react';
import BwNotification from '..';
import Button from '../../Button';
export default function NotificationDemo() {
  return (
    <div>
      <BwNotification info="第一次尝试" message="这里是内容区域">
        <Button>显示通知</Button>
      </BwNotification>
    </div>
  );
}

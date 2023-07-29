import React from 'react';
import BwNotification from '..';
import Button from '../../Button';
export default function NotificationDemo() {
  return (
    <div>
      <BwNotification>
        <Button>显示通知</Button>
      </BwNotification>
    </div>
  );
}

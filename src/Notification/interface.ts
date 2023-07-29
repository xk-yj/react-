export interface NotificationProps {
  /**
   * @description 自定义标题
   * @default 标题
   */
  info?: String;
  /**
   * @description 自定义内容
   * @default  这里是一个消息提示
   */
  message?: any;
  /**
   * @description 自定义图标
   * @default
   */
  icon?: String;
  /**
   * @description 设置是否自动关闭
   * @default  fasle
   */
  requireInteraction?: Boolean;
  children?: any;
}

export type NativeNotificationProps = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;

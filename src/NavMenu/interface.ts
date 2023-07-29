export interface NavMenuProps {
  /**
   *@description 模式
   */
  mode?: String;
  /**
   * 展示的数据
   */
  data?: any;
  /**
   * @description 设置宽度
   */
  menuWidth?: String;
  /**
   * @description 是否禁用
   * @default false
   */
  disable?: boolean;
}

export type NativeNavMenuProps = Omit<React.HTMLAttributes<HTMLElement>, 'type'>;

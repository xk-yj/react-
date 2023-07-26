export interface RowProps {
  /**
   * @description 水平排列布局 可选值start/end/center/space-around/space-between
   */
  justify?: string;
  /**
   * @description 垂直排列方式 可选值start/center/end
   */
  align?: string;
  /**
   * @description 自定义样式
   */
  style?: Object;
  /**
   * @description 自定义类名
   */
  className?: string;
  children?: any;
}

export type NativeRowProps = Omit<React.RowHTMLAttributes<HTMLElement>, 'type'>;

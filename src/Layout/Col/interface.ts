export interface ColProps {
  /**
   * @description 容器所占份数
   */
  grow?: number;
  /**
   * @description 自定义样式
   */
  style?: Object;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 间隔
   */
  gutter?: number | string;
  children?: any;
}

export interface ColStyle {}

export type NativeColProps = Omit<React.ColHTMLAttributes<HTMLElement>, 'type'>;

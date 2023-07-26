export interface CardProps {
  /**
   * @description 头部标题
   */
  title?: any;
  /**
   * @description 操作按钮
   */
  extra?: any;
  /**
   * @description 列表样式
   */
  bodyStyle?: any;
  /**
   * @description 阴影
   * @default always/hover/never
   */
  shadow?: String;
  /**
   * @description 宽度
   */
  width?: String;
  /**
   * @description 高度
   */
  height?: String;
  /**
   * @description 边框
   */
  border?: String;
}

export interface CardStyle {
  width?: String;
  height?: String;
  border?: String;
}

export type NativeCardProps = Omit<React.HTMLAttributes<HTMLElement>, ''>;

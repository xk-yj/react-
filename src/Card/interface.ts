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
   * @description 阴影 可选值 always/hover/never
   * @default always
   */
  shadow?: string;
  /**
   * @description 宽度
   */
  width?: string;
  /**
   * @description 高度
   */
  height?: string;
  /**
   * @description 边框
   */
  border?: string;
  children?: any;
}

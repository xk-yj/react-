export interface ButtonProps {
  /**
   * @description 按钮类型 可选值 primary / danger / warning / success /info / text
   * @default primary
   */
  type?: string;
  /**
   * @description 宽度
   * @default 100px
   */
  width?: any;
  /**
   * @description 高度
   * @default 45px
   */
  height?: any;
  /**
   * @description 圆角
   */
  radius?: any;
  /**
   * @description 自定义点击事件
   */
  handleClick?: Function;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  children?: any;
}

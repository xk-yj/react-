export interface SwitchProps {
  /**
   * @description 宽度
   * @default 75px
   */
  width?: any;
  /**
   * @description 高度
   * @default 35px
   */
  height?: any;
  /**
   * @description 是否禁用
   */
  disabled?: boolean;
  /**
   * @description 初始化状态
   */
  value?: boolean;
  /**
   * @description 点击事件
   */
  handleClick?: Function;
}

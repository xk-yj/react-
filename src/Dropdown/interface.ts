export interface Dropdownprops {
  /**
   * @description 菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)
   */
  type?: string;
  /**
   * @description 菜单尺寸，在split-button为 true 的情况下也对触发按钮生效
   */
  size?: string;
  /**
   * @description 	菜单弹出位置
   */
  placement?: string;
  /**
   * @description 触发下拉的行为
   * @default hover
   */
  trigger?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 下拉组件文本
   * @default 下拉菜单
   */
  value?: string;

  /**
   * @description 总数据
   */
  options?: any;

  /**
   * @description 触发事件
   */
  onChange?: any;

  /**
   * @description 数据
   */
  option?: any;
}

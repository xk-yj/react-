export interface CheckboxGroupProps {
  /**
   * @description 整组禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 指定可选项
   * @default false
   */
  options?: any;
  /**
   * @description 变化时的回调函数
   */
  onChange?: Function;
  checkAll?: Function;
}

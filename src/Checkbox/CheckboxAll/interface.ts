export interface CheckboxProps {
  /**
   * @description 指定当前是否选中
   * @default false
   */
  autoFocus?: boolean;
  /**
   * @description 指定当前是否选中
   * @default false
   */
  checked?: boolean;
  /**
   * @description 初始是否选中
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * @description 禁用
   */
  disabled?: boolean;
  /**
   * @description 变化时的回调函数
   */
  onChange?: Function;
}

export interface CheckboxStyle {}

export type NativeCheckboxProps = Omit<React.CheckboxHTMLAttributes<HTMLElement>, 'type'>;

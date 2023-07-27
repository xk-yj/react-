export interface RadioGroupProps {
  /**
   * @description 绑定值
   */
  value?: any;
  /**
   * @description Radio 的 value
   */
  label?: any;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 单选框的大小
   * @default medium|small|mini
   */
  size?: String;
  /**
   * @description 改变状态的触发函数
   */
  onchange?: Function;
  /**
   * @description 初始选中
   */
  defaultValue?: any;
}

export type NativeRadioGroupProps = Omit<React.HTMLAttributes<HTMLElement>, 'size'>;

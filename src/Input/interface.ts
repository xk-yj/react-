export interface InputProps {
  /**
   * @description 类型
   * @default text
   */
  type?: string;
  /**
   * @description 宽度
   * @default 100px
   */
  width?: any;
  /**
   * @description 高度
   * @default 32px
   */
  height?: any;
  /**
   * @description 是否有边框
   * @default true
   */
  bordered?: boolean;
  /**
   * @description 输入框提示内容
   */
  defaultValue?: any;
  /**
   * @description 输入框内容
   */
  value?: string;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 输入时是否有边框
   * @default true
   */
  inputBorder?: boolean;
  /**
   * @description 输入时边框颜色
   */
  inputColor?: String;
  /**
   * @description 输入时触发事件
   */
  handleChange?: Function;
  /**
   * @description 失去焦点触发
   */
  handleBlur?: Function;
  /**
   * 获取焦点触发
   */
  handleFcus?: Function;
}

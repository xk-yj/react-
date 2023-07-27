export interface MessageBoxProps {
  /**
   * @description 标题
   */
  messageTitle?: string;
  /**
   * @description 内容
   */
  messageMain?: any;
  /**
   * @description 内容是否支持html片段
   * @default false
   */
  useHTMLString?: boolean;
  /**
   * @description 提交事件
   */
  handleSubmit?: any;
  children?: any;
}

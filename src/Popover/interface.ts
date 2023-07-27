export interface PopoverProps {
  /**
   * @description 标题
   */
  title?: any;
  /**
   * @description 显示内容 支持html片段
   */
  content?: any;
  /**
   * @description 设置弹窗宽度
   * @default 200px
   */
  width?: number;
  /**
   * @description 设置显示方式
   */
  trigger?: string;
  /**
   * @description 设置显示弹框位置
   * @default bottom
   */
  placement?: string;
  children?: any;
}

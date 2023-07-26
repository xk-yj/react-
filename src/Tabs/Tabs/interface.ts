export interface TabsProps {
  /**
   * @description tab栏类型
   * @default text
   */
  type?: string;
  /**
   * @description 添加类名
   */
  className?: string;
  /**
   * @description 初始化显示，值对应TabPane的name值
   * @default 默认为第一项
   */
  value?: string;
  /**
   * @description 自定义点击事件
   */
  handleClick?: Function;
  children?: any;
}

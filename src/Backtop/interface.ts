export interface BacktopProps {
  /**
   * @description 组件距离文档右边框距离
   * @default 80px
   */
  right?: any;
  /**
   * @description 组件距离文档下边框距离
   * @default 200px
   */
  bottom?: any;
  /**
   * @description 点击返回顶部自定义事件
   */
  topClick?: Function;
  /**
   * @deprecated 控制返回顶部显示隐藏
   */
  show?: boolean;
  /**
   * @description 给组件添加类名
   */
  className?: string;
  children?: any;
}

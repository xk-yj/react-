export interface TabPaneProps {
  children?: any;
  /**
   * @description 添加类名
   */
  className?: string;
  /**
   * @description 必填项，控制不会渲染该项，值同时也是tab栏导航
   */
  name: string;
}

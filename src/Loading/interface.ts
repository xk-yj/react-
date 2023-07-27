export interface LoadingProps {
  /**
   * @description 自定义描述文本
   * @default 加载中...
   */
  text?: string;
  /**
   * @description 设置遮罩层颜色
   * @default
   */
  backColor?: any;
  /**
   * @description 背景颜色
   * @default
   */
  background?: string;
  /**
   * @description 容器中居中显示
   * @default
   */
  center?: boolean;
  /**
   * @description 设置加载器尺寸
   * @default  md
   */
  size?: string | 'xs' | 'sm' | 'md' | 'lg';
}

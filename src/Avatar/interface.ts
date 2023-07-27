export interface AvatarProps {
  /**
   * @description 圆形显示
   * @default fasle
   */
  circle?: boolean;
  /**
   * @description 头像尺寸 可选值 lg / md / sm / xs
   * @default md
   */
  size?: any;
  /**
   * @description img元素的sizes属性
   * @default string
   */
  sizes?: string;
  /**
   * @description 设置图片地址
   * @default string
   */
  src?: string;
  /**
   * @description 图片加载失败的提示信息
   * @default string
   */
  alt?: string;
  /**
   * @description 自定义样式
   */
  style?: Object;
  children?: string;
}

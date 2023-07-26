export interface AvatarProps {
  /**
   * @description 内容
   * @default string
   */
  children?: String;
  /**
   * @description 圆形显示
   * @default fasle
   */
  circle?: Boolean;
  /**
   * @description 头像尺寸
   * @default 'md'
   */
  size?: any;
  /**
   * @description img元素的sizes属性
   * @default string
   */
  sizes?: String;
  /**
   * @description 设置图片地址
   * @default string
   */
  src?: String;
  /**
   * @description 图片加载失败的提示信息
   * @default string
   */
  alt?: String;
}
export interface AvatarStyle {
  width?: String;
  height?: String;
  circle?: String;
  size?: any;
}

export type NativeAvatarProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'size'>;

export interface CarouselProps {
  /**
   * @description 走马灯的高度
   * @default 200px
   */
  height?: string;
  /**
   * @description 初始状态激活的幻灯片的索引，从 0 开始
   * @default 0
   */
  initial_index?: number;
  /**
   * @description 指示器的触发方式	指示器的触发方式 可选值 hover / click
   * @default click
   */
  trigger?: string;
  /**
   * @description 是否自动切换
   * @default true
   */
  autoplay?: boolean;
  /**
   * @description 自动切换的时间间隔，单位为毫秒
   * @default 3000
   */
  interval?: number;
  /**
   * @description 是否循环显示
   * @default true
   */
  loop?: boolean;
  /**
   * @description 幻灯片切换时触发
   */
  change?: Function;
  children?: any;
}

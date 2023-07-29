export interface InfiniteScrollProps {
  /**
   * @description 是否禁用滚动
   * @default false
   */
  scrollDisabled?: Boolean;
  /**
   * @description 滚动条到底的距离
   * @default 0
   */
  scrollDistance?: number;
  /**
   * @description 滚动加载功能实现次数之后禁用
   * @default 3
   */
  frequency?: number;
}

export interface InfiniteScrollProps {
  /**
   * @description 是否禁用
   * @default false
   */
  infiniteScrollDisabled?: Boolean;
  /**
   * @description 节流时延，单位为ms
   * @default 200
   */
  infiniteScrollDelay?: number;
  /**
   * @description 触发加载的距离阈值，单位为px
   * @default 0
   */
  infiniteScrollDistance?: number;
  /**
   * @description 是否立即执行加载方法，以防初始状态下内容无法撑满容器。
   * @default true
   */
  infiniteScrollImmediate?: Boolean;
}

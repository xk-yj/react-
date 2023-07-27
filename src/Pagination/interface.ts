export interface PaginationProps {
  /**
   * @description 默认的当前页数
   * @default 1
   */
  defaultCurrent?: number;
  /**
   * @description 默认的每页条数
   * @default 10
   */
  defaultPageSize?: number;
  /**
   * @description 数据总数
   * @default 0
   */
  total: number;
  /**
   * @description 显示几页
   * @default 5
   */
  pagelength?: number;
  /**
   * @description 获取当前页数
   */
  handleClick?: Function;
  /**
   * @description 是否显示总页面数
   */
  showSumPage?: boolean;
  /**
   * @description 显示跳转
   */
  go?: boolean;
}

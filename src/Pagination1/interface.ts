export interface PaginationProps {
  /**
   * @description 总条目数
   * @default 10
   */
  totalPages?: number;
  /**
   * @description 是否使用小型分页样式
   * @default false
   */
  small?: Boolean;

  /**
   * @description 每页显示条目个数，支持 .sync 修饰符
   * @default 7
   */
  page?: number;

  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * @description 组件布局，子组件名用逗号分隔
   * @default 'prev, pager, next, jumper, ->, total'
   */
  layout?: String;

  /**
   * @description 替代图标显示的上一页文字
   * @default <
   */
  prevtext?: String;

  /**
   * @description 替代图标显示的下一页文字
   * @default >
   */
  nexttext?: String;
}

export interface TableProps {
  /**
   * @description 设置表格主体
   */
  dataSource: any;
  /**
   * @description 设置表格头部
   */
  columns: any;
  /**
   * @description 是否带斑马纹
   */
  stripe?: boolean;
  /**
   * @description 是否带边框
   */
  border?: boolean;
  /**
   * @description 需要合并列的索引
   */
  colSpanName?: String;
  /**
   * @description 需要合并几列
   */
  colSpan?: number;
  /**
   * @description 需要合并行的索引
   */
  rowSpanName?: String;
  /**
   * @description 需要合并几行
   */
  rowSpan?: number;
}

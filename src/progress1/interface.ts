export interface Progress {
  /**
   * @description 百分比（必填）
   * @default 0
   */
  percentage: number;
  /**
   * @description 进度条类型
   * @default line
   */
  type?: string;

  /**
   * @description 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）
   * @default 126
   */
  width?: number;

  /**
   * @description 进度条显示文字内置在进度条内（只在 type=line 时可用）
   * @default false
   */
  inside?: boolean;

  /**
   * @description 进度条当前状态
   */
  status?: String;

  /**
   * @description 进度条背景色（会覆盖 status 状态颜色）
   * @default ""
   */
  color?: String;

  /**
   * @description 更改进度条的高度
   * @default 6
   */
  strokeheight?: number;
}

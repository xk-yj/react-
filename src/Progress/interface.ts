export interface ProgressProps {
  /**
   * @description 进度百分比
   * @default 0
   */
  percent?: number;
  /**
   * @description 是否显示文字
   * @default  true
   */
  showInfo?: Boolean;
  /**
   * @description 	进度状态
   * @default
   */
  status?: String | 'success' | 'fail' | 'active';
  /**
   * @description 	线条颜色
   * @default
   */
  strokeColor?: string;

  /**
   * @description 	线条宽度
   * @default
   */
  strokeWidth?: Number;
}

export type NativeProgressProps = Omit<React.HTMLAttributes<HTMLElement>, 'title'>;

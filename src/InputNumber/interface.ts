export interface InputNumberProps {
  /**
   * @description 初始值
   * @default 1
   */
  value?: number;
  /**
   * @description 最小值
   * @default 0
   */
  min?: any;
  /**
   * @description 最大值
   * @default 99999999
   */
  max?: any;
  /**
   * @description 宽度
   * @default 150px
   */
  width?: any;
  /**
   * @description 高度
   * @default 45px
   */
  height?: any;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 自定义cahnge事件
   */
  change?: Function;
  /**
   * @description 自定义失去焦点事件
   */
  blur?: Function;
  /**
   * @description 自定义焦点事件
   */
  focus?: Function;
  /**
   * @description 按钮位置
   * @default center
   */
  controlsPosition?: 'left' | 'rigth' | 'center';
}

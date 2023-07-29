export interface CollapseProps {
  //自定义button接口
  /**
   * @description 类型
   */
  type?: any;
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 必填项 高度
   */
  height?: Number;
  /**
   * @description  是否只展开一个
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 配置选项卡内容
   * @default
   */
  items?: any;
  /**
   * @description 点击面板回调事件
   */
  onChange?: Function | undefined;
}

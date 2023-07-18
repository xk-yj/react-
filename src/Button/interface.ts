export interface ButtonProps {
    // 要想文档中有 api 必须这么写注释.
    /**
     * @description 按钮主题
     * @default primary
     */
    type?: String;
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    /**
     * @description 禁用状态
     * @default false
     */
    disabled?: Boolean;
    /**
     * @description 字体按钮
     * @default false
     */
    circle?: Boolean;
    /**
     * @description 按钮边框为虚线
     * @default false
     */
    dashed?: Boolean;
    /**
     * @description 加载状态
     * @default false
     */
    loading?: Boolean;
    /**
     * @description 按钮点击回调事件
     */
    handleClick?: Function | undefined;
  }
  export interface ButtonStyle {
    //button样式接口
    width?: String;
    height?: String;
    borderRadius?: String;
    border?: String;
    cursor?: String;
  }
  export type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
  
export interface LinkProps {
  /**
   * @description link链接类型 可选值 primary / danger / warning / success / info / text
   * @default primary
   */
  type?: string;
  /**
   * @description 设置下划线
   * @default false
   */
  underline?: boolean;
  /**
   * @description 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 自定义跳转路径
   * @default /
   */
  href?: string;
  children?: any;
}

export interface ColStyle {}

export type NativeColProps = Omit<React.ColHTMLAttributes<HTMLElement>, 'type'>;

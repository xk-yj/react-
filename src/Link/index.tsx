import React from 'react';
import Css from './index.module.less';
type Props = {
  type?: string;
  underline?: boolean;
  disabled?: boolean;
  href?: string;
  children: any;
};

export default function ({ type, underline = true, disabled, href, children }: Props) {
  if (
    !type &&
    type !== 'danger' &&
    type !== 'warning' &&
    type !== 'success' &&
    type !== 'text' &&
    type !== 'info'
  ) {
    type = 'text';
  }

  if (!href) {
    href = '/';
  }
  href = disabled ? 'javascript:void(0)' : href;

  let className = [
    Css[type],
    !disabled && underline ? Css['underline'] : '',
    disabled ? Css['disabled'] : '',
  ].join(' ');

  return (
    <div className={Css['link']}>
      <a href={href} className={className}>
        {children}
      </a>
    </div>
  );
}

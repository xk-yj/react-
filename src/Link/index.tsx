import React, { FC, memo } from 'react';
import Css from './index.module.less';
import { LinkProps } from './interface';
const Link: FC<LinkProps> = memo(({ type, underline = true, disabled, href, children }) => {
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
});

export default Link;

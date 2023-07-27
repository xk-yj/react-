import React, { FC, useMemo, memo } from 'react';
import { AvatarProps } from './interface';
import Css from './index.module.less';
const Avatar: FC<AvatarProps> = memo(({ children, circle, size, sizes, src, style }) => {
  const AvatarStyle = useMemo(() => {
    if (!size && size !== 'lg' && size !== 'md' && size !== 'sm' && size !== 'xs') {
      return 'md';
    }
    return size as any;
  }, [size, sizes]);

  return (
    <div className={[Css[AvatarStyle], Css['avatar']].join(' ')}>
      <img src={src} className={circle ? Css['circle'] : ''} style={style} alt="" />
      <p>{children}</p>
    </div>
  );
});

export default Avatar;

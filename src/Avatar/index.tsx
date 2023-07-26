import React, { FC, useMemo, memo, useState, useRef, useEffect } from 'react';
import { AvatarProps, AvatarStyle, NativeAvatarProps } from './interface';
import './Avatar.module.less';
const Avatar: FC<AvatarProps & NativeAvatarProps> = memo((props) => {
  const { children, circle, size, sizes, src } = props;
  console.log(props);

  const AvatarStyle = useMemo(() => {
    if (!size && size !== 'lg' && size !== 'md' && size !== 'sm' && size !== 'xs') {
      return 'md';
    }
    return size as any;
  }, [size, sizes]);

  //   const AvatarSize = useMemo(() => {
  //     var size: AvatarStyle = {
  //         width: '50px',
  //         height: '50px',
  //       };
  //       if(sizes){

  //       }
  //     return size as any;
  //   }, [size,sizes]);
  return (
    <div className={AvatarStyle + ' avatar'}>
      <img src={src} className={circle ? 'circle' : ''} style={props.style} alt="" />
      <p>{children}</p>
    </div>
  );
});

export default Avatar;

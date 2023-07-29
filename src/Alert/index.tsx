import React, { FC, useState, useMemo, useRef } from 'react';

import { AlertProps } from './interface';
import './Alert.module.less';

const Alert: FC<AlertProps> = (props) => {
  const { type, title, closable, center, closeText, LimeGreen, CoolGray, Goldenrod, Coral } = props;

  const [falg, setFlag] = useState(false);

  const backgroundColor = {
    LimeGreen: 'limegreen',
    CoolGray: 'grey',
    Goldenrod: 'goldenrod',
    Coral: 'coral',
  };
  const typeRef = useRef();
  const handler = () => {
    setFlag(true);
  };

  const AlertStyle = useMemo(() => {
    if (!type && type !== 'Success' && type !== 'Info' && type !== 'error') {
      return 'Success';
    }
    return type as any;
  }, [type]);

  return (
    <>
      {falg ? null : (
        <div
          className={AlertStyle}
          style={{
            margin: '20px 0',
            backgroundColor: LimeGreen
              ? backgroundColor.LimeGreen
              : '' || CoolGray
              ? backgroundColor.CoolGray
              : '' || Goldenrod
              ? backgroundColor.Goldenrod
              : '' || Coral
              ? backgroundColor.Goldenrod
              : '',
            color: LimeGreen || CoolGray || Goldenrod || Coral ? 'white' : 'gray',
          }}
        >
          <p className="title" style={{ margin: center ? '0 auto' : '' }}>
            {title ? title : '这是一个提示文案'}{' '}
          </p>
          {closable ? null : (
            <div className="logo" onClick={handler}>
              {' '}
              {closeText ? closeText : 'x'}{' '}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Alert;

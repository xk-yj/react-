import React, { useState } from 'react';
import Css from './index.module.less';
import Icon from '../Icon/index';
type Props = {
  title?: string;
  message?: any;
  useHTMLString?: boolean;
  children?: any;
  handleSubmit?: any;
};

export default ({ title, message, useHTMLString, children, handleSubmit }: Props) => {
  let [flag, setFlag] = useState(false);
  let style = {
    display: flag ? 'block' : 'none',
  };

  function msgBoxShow() {
    setFlag(true);
  }

  function mshBoxhied() {
    setFlag(false);
  }

  function submit() {
    if (handleSubmit) {
      handleSubmit();
    }
    setFlag(false);
  }

  return (
    <div className={Css.msgbox}>
      <div
        className={Css.switch}
        onClick={() => {
          msgBoxShow();
        }}
      >
        {children || '显示弹窗'}
      </div>
      <div className={Css.msgbox_main} style={style}>
        <div className={Css.mack}>
          <div className={Css.content}>
            <div className={Css.title}>
              <span>{title || '标题'}</span>
              <i className={Css.icon} onClick={() => mshBoxhied()}>
                <Icon name="closeguanbi" />
              </i>
            </div>
            <div className={Css.text}>
              {message ? (useHTMLString ? message : String(message)) : '内容'}
            </div>
            <div className={Css.submit}>
              <button onClick={() => submit()}>确认</button>
              <button
                onClick={() => {
                  mshBoxhied();
                }}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

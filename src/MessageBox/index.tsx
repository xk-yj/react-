import React, { useState, FC, memo } from 'react';
import Css from './index.module.less';
import Icon from '../Icon/index';
import { MessageBoxProps } from './interface';
import Button from '../Button';
const MessageBox: FC<MessageBoxProps> = memo(
  ({ messageTitle, messageMain, useHTMLString, handleSubmit, children }) => {
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
                <span>{messageTitle || '标题'}</span>
                <i className={Css.icon} onClick={() => mshBoxhied()}>
                  <Icon name="closeguanbi" />
                </i>
              </div>
              <div className={Css.text}>
                {messageMain ? (useHTMLString ? messageMain : String(messageMain)) : '内容'}
              </div>
              <div className={Css.submit}>
                <Button type="success" handleClick={submit}>
                  确认
                </Button>
                <Button type="danger" handleClick={mshBoxhied}>
                  取消
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default MessageBox;

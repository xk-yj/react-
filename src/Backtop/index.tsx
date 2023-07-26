import React, { FC, memo } from 'react';
import Css from './index.module.less';
import Icon from '../Icon';
import { BacktopProps, NativeBacktopProps } from './interface';

// export default function Backtop({ right, bottom, topClick, children, show, className }) {
//     // 接收参数
//     let style: any = {
//         right: right ? right : '80px',
//         bottom: bottom ? bottom : '200px',
//         display: show ? "block" : "none",
//     }

//     // 返回顶部事件
//     function Top() {
//         if (topClick) {
//             topClick()
//         }

//         window.scrollTo({
//             top: document.body.offsetTop,
//             behavior: 'smooth'
//         });
//     }

//     return (
//         <div className={topCss.backtop} onClick={() => { Top() }} style={style}>
//             {children || <Icon name={'arrow-single-updanjiantou-shang'} />}
//         </div>
//     )
// }

const Backtop: FC<BacktopProps & NativeBacktopProps> = memo(
  ({ right, bottom, topClick, children, show, className }) => {
    let style: any = {
      right: right ? right : '80px',
      bottom: bottom ? bottom : '200px',
      display: show ? 'block' : 'none',
    };

    function Top() {
      if (topClick) {
        topClick();
      }

      window.scrollTo({
        top: document.body.offsetTop,
        behavior: 'smooth',
      });
    }

    return (
      <div
        className={[Css.backtop, className ? className : ''].join(' ')}
        onClick={() => {
          Top();
        }}
        style={style}
      >
        {children || <Icon name={'arrow-single-updanjiantou-shang'} />}
      </div>
    );
  },
);

export default Backtop;

import React, { FC, memo, useMemo } from 'react';
import { ProgressProps, NativeProgressProps } from './interface';
import css from './Progress.module.less';
const Progress: FC<ProgressProps & NativeProgressProps> = memo((props) => {
  let { percent, strokeColor, status, showInfo } = props;
  console.log(props);
  console.log(css);

  // const newPercent = useMemo(()=>{
  //     if(percent){
  //       percent =  percent + "%"
  //    }
  //    if(status && status === 'fail'){
  //     return <CloseOutlined />
  // }
  //     return percent

  // },[percent])
  const statusStyle = useMemo(() => {
    let size = {
      width: '0',
      backgroundColor: '#ffc107',
      num: '0%',
    };
    if (percent) {
      (size.width = percent + '%'), (size.num = percent + '%');
    }
    if (percent === 100 && status && status === 'success') {
      size = {
        width: percent + '%',
        backgroundColor: '#4caf50',
        num: percent + '%',
      };
    }
    if (percent && status && status === 'fail') {
      size = {
        width: percent + '%',
        backgroundColor: '#f44336',
        num: percent + '%',
      };
    }
    if (percent && status && status === 'active') {
      size = {
        width: percent + '%',
        backgroundColor: '#3498ff',
        num: percent + '%',
      };
    }
    if (strokeColor) {
      size.backgroundColor = strokeColor;
    }
    if (showInfo === false) {
      size.num = '';
    }
    return size;
  }, [status, percent]);
  console.log(status === 'active' ? css['line_bg_show'] : css['line_bg']);

  return (
    <div className={css['line']}>
      <div className={css.line_outer}>
        <div className={css.line_inner}>
          <div
            className={status === 'active' ? css['line_bg_show'] : css['line_bg']}
            style={statusStyle}
          ></div>
        </div>
      </div>

      <div className={css.line_info}>
        <span className={css.line_info_status}>{statusStyle.num}</span>
      </div>
    </div>
  );
});

export default Progress;

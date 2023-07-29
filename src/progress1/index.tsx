import React from 'react';
import { Progress } from './interface';
import style from './progress.less';

const Prog: React.FC<Progress> = ({
  percentage = 0,
  color = '',
  strokeheight = 6,
  type = 'line',
  inside = false,
}) => {
  const sty = {
    width: `${percentage}%`,
    backgroundColor: color,
    height: `${strokeheight}px`,
    lineHeight: `${strokeheight}px`,
  };

  let progressContent = null;
  if (type === 'line') {
    progressContent = (
      <div className={style.bar} style={sty}>
        {inside && <span className={style.inside}>{percentage}%</span>}
      </div>
    );
  } else if (type === 'circle') {
    progressContent = (
      <div>
        <svg
          viewBox="0 0 36 36"
          className={style.circle}
          style={{ strokeDasharray: `${percentage}px 100px` }}
        >
          <path
            className={style.bgCircle}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            stroke={color ? color : 'rgb(32, 160, 255)'}
          />
          <path
            className={style.fillCircle}
            strokeDasharray={`${percentage} 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        {inside && <span className={style.inside}>{percentage}%</span>}
      </div>
    );
  }

  return (
    <div
      className={type === 'circle' ? style.circleprogress : style.progress}
      style={{ height: strokeheight }}
    >
      {progressContent}
    </div>
  );
};

export default Prog;

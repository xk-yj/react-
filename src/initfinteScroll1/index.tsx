import React, { FC, useState, useEffect, useRef } from 'react';
import './Scroll.module.less';
import { InfiniteScrollProps } from './interface';

const InfiniteScroll: FC<InfiniteScrollProps> = (props) => {
  const { scrollDisabled, scrollDistance, frequency } = props;

  const DivScroll: any = useRef(null);
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  let [flag, setFlag] = useState(0);
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = DivScroll.current;
    if (scrollTop + clientHeight >= scrollHeight - (scrollDistance ? scrollDistance : 0)) {
      loadMoreData();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const loadMoreData = () => {
    if (frequency === flag || scrollDisabled) {
      return;
    } else {
      for (let i = data.length + 1; i <= data.length + 5; i++) {
        setData((prevData) => [...prevData, i]); // 将新数据添加到已加载数据中
      }
      setFlag((prevState) => prevState + 1);
    }
  };
  return (
    <div
      className="ScrollBox"
      style={{ width: '100%', height: '300px', overflow: 'auto', fontSize: '20px', color: 'white' }}
      onScroll={handleScroll}
      ref={DivScroll}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: '80%',
            height: '50px',
            margin: '20px auto',
            backgroundColor: 'skyblue',
            textAlign: 'center',
            lineHeight: '50px',
          }}
        >
          {index}
        </div>
      ))}
      {frequency === flag ? (
        <div
          style={{
            width: '80%',
            height: '50px',
            margin: '20px auto',
            textAlign: 'center',
            lineHeight: '50px',
            fontSize: '12px',
            color: 'black',
          }}
        >
          没有更多内容了
        </div>
      ) : null}
    </div>
  );
};

export default InfiniteScroll;

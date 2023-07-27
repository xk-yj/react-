import React, { FC, memo, useState } from 'react';
import Css from './index.module.less';
import { InfiniteScrollProps } from './interface';

const InfiniteScroll: FC<InfiniteScrollProps> = memo(
  ({
    infiniteScrollDisabled,
    infiniteScrollDelay,
    infiniteScrollDistance,
    infiniteScrollImmediate,
  }) => {
    infiniteScrollDisabled = infiniteScrollDisabled ? infiniteScrollDisabled : false;
    infiniteScrollDelay = infiniteScrollDelay ? infiniteScrollDelay : 200;
    infiniteScrollDistance = infiniteScrollDistance ? infiniteScrollDistance : 0;
    infiniteScrollImmediate = infiniteScrollImmediate ? infiniteScrollImmediate : true;

    // 全局
    let n = 1;
    let [list, setList] = useState(getlist(10));

    function getlist(num: number) {
      let arr: any = [];
      for (let i = 0; i < num; i++) {
        arr.push(n++);
        console.log(n);
      }
      return arr;
    }

    function scroll(e: any) {
      let top = e.target.scrollTop;
      let height = e.target.offsetHeight;
      let heightSum = e.target.children[0].offsetHeight;

      if (top + height >= heightSum - infiniteScrollDistance) {
        if (infiniteScrollImmediate) {
          let newArr = getlist(2);
          let arr = [...list, ...newArr];
          setList(arr);
        } else {
          setTimeout(() => {
            let newArr = getlist(2);
            let arr = [...list, ...newArr];
            setList(arr);
          }, infiniteScrollDelay);
        }
      }
    }

    return (
      <div className={Css['infiniteScroll']} onScroll={(e: any) => scroll(e)}>
        <ul>
          {list.map((item: any, index: any) => {
            return <li>测试{index + 1}</li>;
          })}
        </ul>
      </div>
    );
  },
);

export default InfiniteScroll;

import React, { useMemo, FC, memo, useEffect, useState, useRef } from 'react';
import Css from './index.module.less';
import { PaginationProps } from './interface';
import Icon from '../Icon';

const Pagination: FC<PaginationProps> = memo(
  ({ defaultCurrent, defaultPageSize, total, pagelength, handleClick, go, showSumPage }) => {
    let [num, setNum] = useState(0);
    const inputValue: any = useRef(null);
    const uls: any = useRef(null);
    defaultCurrent = defaultCurrent ? defaultCurrent : 0;
    go = go ? go : false;
    showSumPage = showSumPage ? showSumPage : false;
    let page = pagelength ? pagelength : 5;
    const pagesize = defaultPageSize ? defaultPageSize : 10;
    // 总页面数
    const pageSum = useMemo(() => {
      return Math.ceil(total / pagesize);
    }, [total]);
    // 响应式
    let [indexPage, setIndex]: any = useState(null);
    let [arr, setArr]: any = useState([]);
    // 显示数
    let list = function () {
      let arr = [];
      // console.log(page);
      for (let i = 1; i <= page; i++) {
        arr.push(i + num);
      }
      return arr;
    };

    // 改变颜色
    function select(index: any) {
      changeColor(index);
    }

    function changeColor(index: any) {
      if (uls.current != null) {
        if (uls.current.children != null) {
          let lis = uls.current.children;

          Array.from(lis).forEach((el: any, ind: any) => {
            if (ind == index) {
              el.className = Css['selected1'];
            } else {
              el.className = '';
            }
          });
          return handleClick ? handleClick({ value: index + num + 1 }) : null;
        }
      }
    }

    // 当前改变颜色的li
    function ind() {
      let lis = uls.current.children;
      let ind = null;
      lis.forEach((el: any, index: any) => {
        if (el.className == Css['selected1']) {
          ind = index;
        }
      });
      return ind;
    }
    // 右
    function rightGo() {
      let sumlist = list().length;
      let index: any = ind();
      if (index + 1 < Math.ceil(sumlist / 2) || num + sumlist == pageSum) {
        if (index < 4) {
          select(index + 1);
        }
      } else {
        if (num + page < pageSum) {
          let nuwNum = num + 1;
          setIndex(index);
          setNum(() => nuwNum);
        }
      }
    }
    // 左
    function leftGo() {
      let sumlist = list().length;
      let index: any = ind();
      if (index + 1 > Math.ceil(sumlist / 2) || num == 0) {
        if (index > 0) {
          select(index - 1);
        }
      } else {
        if (num != 0) {
          setNum(num - 1);
        }
      }
    }

    function blurNum() {
      if (inputValue.current.value.trim() === '') {
        inputValue.current.value = '';
        return;
      }

      if (inputValue.current.value > pageSum || inputValue.current.value < 1) {
        alert('没有该页数');
      } else {
        if (inputValue.current != null && inputValue.current.value <= pageSum) {
          if (Number(inputValue.current.value) + list().length > pageSum) {
            setNum(pageSum - list().length);
            setIndex(Number(inputValue.current.value) - list().length - 1);
          } else {
            if (Number(inputValue.current.value) < list().length) {
              setNum(0);
              setIndex(Number(inputValue.current.value) - 1);
            } else {
              if (indexPage == null) {
                setNum(Number(inputValue.current.value) - 3);
              } else {
                setNum(Number(inputValue.current.value) - 3 - indexPage);
              }
              setIndex(Math.ceil(list().length / 2) - 1);
            }
          }
        }
      }
      inputValue.current.value = null;
    }

    useEffect(() => {
      if (indexPage != null) {
        select(indexPage);
      } else {
        select(defaultCurrent);
      }
    });

    useEffect(() => {
      setArr(list);
    }, [num]);

    return (
      <div className={Css['pagination']}>
        <button onClick={() => leftGo()}>
          <Icon name="arrow-leftdanjiantou-zuo" />
        </button>
        <p style={{ display: num == 0 ? 'none' : 'block' }}>···</p>
        <ul className="listClass" ref={uls}>
          {arr.map((item: any, index: any) => {
            return <li onClick={(e) => select(index)}>{item}</li>;
          })}
        </ul>
        <p style={{ display: num + page >= pageSum ? 'none' : 'block' }}>···</p>
        <button onClick={() => rightGo()}>
          <Icon name="arrow-rightjiantou-you2" />
        </button>

        <div style={{ display: showSumPage ? 'block' : 'none' }}>
          <p>总页数：{pageSum}</p>
        </div>

        <div className={Css['input']} style={{ opacity: go ? 1 : 0 }}>
          <p>跳至</p>
          <input className={Css['inp']} ref={inputValue} type="text" onBlur={() => blurNum()} />
          <p>页</p>
        </div>
      </div>
    );
  },
);

export default Pagination;

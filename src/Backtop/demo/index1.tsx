import React, { useEffect, useState } from 'react';
import Backtop from '..';

export default function () {
  let [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;

      if (scrollTop > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);
  return (
    <div>
      基本使用方法滚动显示
      <Backtop show={show}></Backtop>
    </div>
  );
}

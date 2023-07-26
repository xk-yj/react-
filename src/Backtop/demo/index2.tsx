import React, { useEffect, useState } from 'react';
import Backtop from '..';

export default function () {
  let [show, setShow] = useState(false);
  // useEffect(() =>{
  //     window.onscroll = () =>{
  //         let scrollTop = document.documentElement.scrollTop

  //         if(scrollTop > 200){
  //             setShow(true)
  //         }else{
  //             setShow(false)
  //         }
  //     }
  // }, [])

  return (
    <div>
      自定义显示位置和内容
      <Backtop show={true} bottom={100} right={80}>
        Up
      </Backtop>
    </div>
  );
}

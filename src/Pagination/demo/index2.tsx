import React from 'react';
import Pagination from '..';

export default function Pagination2() {
  function abc(value: any) {
    console.log(value);
  }
  return (
    <div>
      <Pagination
        total={100}
        showSumPage={true}
        defaultCurrent={0}
        handleClick={abc()}
        go={true}
      ></Pagination>
    </div>
  );
}

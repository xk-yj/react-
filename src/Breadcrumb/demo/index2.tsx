import React from 'react';
import Breadcrumb from '..';
export default function index1() {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: 'Home',
        },
        {
          title: <a href="">Application Center</a>,
          href: '',
        },
        {
          title: <a href="">Application List</a>,
          href: '',
        },
        {
          title: 'An Application',
        },
      ]}
    />
  );
}

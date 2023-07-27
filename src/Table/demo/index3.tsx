import React from 'react';
import Table from '..';

export default function index1() {
  const dataSource = [
    {
      key: '1',
      data: '2016-05-02',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      data: '2016-05-02',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      data: '2016-05-02',
      name: '王小虎',
      age: 18,
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      key: '4',
      data: '2016-05-02',
      name: '王小虎',
      age: 19,
      address: '上海市普陀区金沙江路 1518 弄',
    },
    {
      key: '5',
      data: '2016-05-02',
      name: '王大虎',
      age: 100,
      address: '上海市普陀区金沙江路 1518 弄',
    },
  ];

  const columns = [
    {
      title: 'id',
      dataIndex: 'key',
      width: '190px',
      key: 'key',
    },
    {
      title: '日期',
      dataIndex: 'data',
      width: '190px',
      key: 'data',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: '190px',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '190px',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} border={true}></Table>
    </div>
  );
}

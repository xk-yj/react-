import React from 'react';
import Select from '../index';

export default function SelectDom2() {
  const handleSelectChange = (value: string) => {
    console.log('Selected value:', value);
  };

  const options1 = [
    { value: '选项1', label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' },
  ];
  return (
    <div>
      <Select options={options1} onChange={handleSelectChange} disabled={true} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import style from './pagination.less';
import { PaginationProps } from './interface';

const Pagination: React.FC<PaginationProps> = ({
  totalPages = 10,
  small,
  page = 7,
  disabled,
  prevtext = '<',
  nexttext = '>',
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(page);

  const handlePageClick = (pageNumber: number) => {
    if (disabled) return;
    setCurrentPage(pageNumber);
  };

  const preclick = () => {
    if (disabled) return;
    let pre = currentPage - 1;
    if (pre <= 1) {
      pre = 1;
    }
    setCurrentPage(pre);
  };

  const nextclick = () => {
    if (disabled) return;
    let next = currentPage + 1;
    if (next >= totalPages) {
      next = totalPages;
    }
    setCurrentPage(next);
  };

  // 根据当前页和总页数计算显示的起始页码和终止页码
  const calculatePages = () => {
    let start = currentPage - 3;
    let end = currentPage + 3;

    if (start <= 1) {
      start = 1;
      end = start + 6;
    }

    if (end >= totalPages) {
      end = totalPages;
      start = end - 6;
      if (start <= 1) {
        start = 1;
      }
    }

    setStartPage(start);
    setEndPage(end);
  };

  // 在组件渲染过程中计算页码范围
  useEffect(() => {
    calculatePages();
  }, [currentPage, totalPages]);

  return (
    <div className={style.main}>
      <ul className={`${style.page} ${small ? style.small : ''} ${disabled ? style.disabled : ''}`}>
        <li onClick={preclick}>{prevtext}</li>

        {/* 生成动态的页码列表 */}
        {startPage > 1 && (
          <>
            <li onClick={() => handlePageClick(1)}>1</li>
            {startPage > 2 && <li>...</li>}
          </>
        )}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
          <li
            key={startPage + index}
            className={currentPage === startPage + index ? style.active : ''}
            onClick={() => handlePageClick(startPage + index)}
          >
            {startPage + index}
          </li>
        ))}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <li>...</li>}
            <li onClick={() => handlePageClick(totalPages)}>{totalPages}</li>
          </>
        )}

        <li onClick={nextclick}>{nexttext}</li>
      </ul>
    </div>
  );
};

export default Pagination;

import React, { FC, memo } from 'react';
import Css from './index.module.less';
import { TableProps } from './interface';

const Table: FC<TableProps> = memo(({ dataSource, columns, stripe, border }) => {
  stripe = stripe ? stripe : false;
  border = border ? border : false;

  return (
    <div className={Css['table']}>
      <table className={[stripe ? Css['stripe'] : '', border ? Css['border'] : ''].join('')}>
        <thead>
          <tr>
            {columns.map((item: any) => {
              return <td>{item.title}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((item: any, index: any) => {
            return (
              <tr>
                {columns.map((el: any) => {
                  console.log(el.key);

                  if (item[el.key]) {
                    return (
                      <td
                        rowSpan={item.rowSpanName == el.key ? item.rowSpan : 1}
                        colSpan={item.colSpanName == el.key ? item.colSpan : 1}
                        style={{ width: el.width, height: item['height'] }}
                        className={Css['td']}
                      >
                        {item[el.key]}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
});

export default Table;

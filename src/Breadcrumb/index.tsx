import React, { FC, memo } from 'react';
import './Breadcrumb.module.less';
import { NavLink } from 'react-router-dom';
import { CollapseProps, CollapseStyle, NativeButtonProps } from './interface';

const Button: FC<CollapseProps & CollapseStyle> = memo((props) => {
  const { items, separator, routes } = props;
  return (
    <div className="Breadcrumb">
      {items
        ? items.map((item: any) => {
            return (
              <div className="nav">
                {item.title} <span className="nav_one">{separator ? separator : '/'}</span>{' '}
              </div>
            );
          })
        : routes.map((item: any) => {
            return (
              <div className="nav">
                <NavLink to={item.path}>{item.breadcrumbName}</NavLink>{' '}
                <span className="nav_one">{separator ? separator : '/'}</span>
              </div>
            );
          })}
    </div>
  );
});

export default Button;

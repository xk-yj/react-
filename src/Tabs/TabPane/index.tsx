import React, { FC, memo } from 'react';
import Css from '../index.module.less';

import { TabPaneProps } from './interface';

const TabPane: FC<TabPaneProps> = memo(({ children, className, name }) => {
  return <div className={[Css['tab_pane'], className ? className : ''].join(' ')}>{children}</div>;
});

export default TabPane;

import React from 'react';
import icons from '../util/IconPath';

type props = {
  name: string;
  size?: any;
  path?: string;
};
console.log(icons);

export default ({ name, size, path }: props) => {
  let style = {
    width: '16px',
    height: '16px',
  };

  if (size) {
    if (typeof size === 'string') {
      if (size.includes('%') || size.includes('px')) {
        style.width = size;
        style.height = size;
      }
    } else if (size * 1) {
      style.width = size + 'px';
      style.height = size + 'px';
    }
  }

  if (path) {
    return <img src={icons[name]} style={style} alt="Icon" />;
  }
  if (Object.keys(icons).includes(name)) {
    return (
      <>
        {/* <svg className="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#2c2c2c" d="M778.581333 549.546667a42.666667 42.666667 0 0 1 64.170667 56.32l-266.581333 303.786666a85.333333 85.333333 0 0 1-128.341334-0.128l-266.624-304.682666a42.666667 42.666667 0 0 1 64.256-56.192L469.333333 804.522667V150.101333a42.666667 42.666667 0 1 1 85.333334 0v654.677334l223.914666-255.189334z"  /></svg> */}
        <img src={icons[name]} style={style} alt="Icon" />
      </>
    );
  }
  return null;
};

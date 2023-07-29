import React, { ChangeEvent } from 'react';
import './Select.module.less';
// import SelectProps from './interface'
interface Option {
  value: string;
  label: string;
}
interface SelectProps {
  /**
   * @description 选项
   */
  options: Option[];
  onChange: (value: string) => void;
  /**
   * @description 是否禁用状态
   * @default false
   */
  disabled?: Boolean;
}

const Select: React.FC<SelectProps> = ({ options, onChange, disabled }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <>
      <div>
        <select
          onChange={handleChange}
          className="Select"
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          disabled={disabled ? true : false}
        >
          {options.map((option) => (
            <option key={option.value} className="SelectOption">
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Select;

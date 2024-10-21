'use client';
import React from 'react';

interface IProps {
  selectData: { value: string | number; label: string }[];
  setValue: React.Dispatch<React.SetStateAction<number | undefined>>;
  value: number | undefined;
  label: string;
}

const CustomSelect: React.FC<IProps> = props => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value, 'e.target.value');
    const selectedValue = e.target.value ? +e.target.value : undefined;
    props.setValue(selectedValue);
  };

  return (
    <div className="w-64">
      <label
        htmlFor="options"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {props.label}
      </label>
      <select
        id="options"
        value={props.value === undefined ? '' : props.value}
        onChange={handleChange}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="" disabled>
          Select an option
        </option>
        {props?.selectData?.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;

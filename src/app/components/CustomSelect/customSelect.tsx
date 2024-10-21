'use client';
import React, { SetStateAction } from 'react';
import { Dispatch } from 'redux';
import { ICarMakeItem } from '../interfaces';

interface IProps {
  selectData: { value: number; label: string }[];
  setValue: any;
  value: number;
  label: string;
}

const CustomSelect = (props: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setValue(+e.target.value);
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
        value={props.value}
        onChange={handleChange}
        className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option value="" disabled>
          Select an option
        </option>
        {props?.selectData?.map(
          (item: { value: number; label: string }, index: number) => {
            return (
              <option key={index} value={item?.value}>
                {item?.label}
              </option>
            );
          }
        )}
      </select>
    </div>
  );
};

export default CustomSelect;

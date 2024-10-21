'use client';
import { useMemo, useState } from 'react';
import CustomSelect from '../CustomSelect/customSelect';
import { ICarMakeItem } from '../interfaces';

interface IProps {
  vehicleMakes: ICarMakeItem[];
}

const Filtration = (props: IProps) => {
  const { vehicleMakes } = props;
  const [make, setMake] = useState();
  const [year, setYear] = useState();

  const data = useMemo(() => {
    return vehicleMakes?.map((item: ICarMakeItem) => ({
      value: item?.MakeId,
      label: item?.MakeName,
    }));
  }, [vehicleMakes]);

  const years = useMemo(() => {
    const currentYear = new Date().getFullYear();
    return Array.from({ length: currentYear - 2015 + 1 }, (_, index) => ({
      value: currentYear - index,
      label: (currentYear - index).toString(),
    }));
  }, []);

  return (
    <div className='flex column gap-20'>
      <CustomSelect
        selectData={data}
        setValue={setMake}
        value={make}
        label={'Chose a make'}
      />
      <CustomSelect
        selectData={years}
        setValue={setYear}
        value={year}
        label={'Chose a year'}
      />
    </div>
  );
};

export default Filtration;

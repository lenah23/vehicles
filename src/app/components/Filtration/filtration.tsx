'use client';
import { useMemo, useState } from 'react';

import CustomSelect from '../CustomSelect/customSelect';
import { ICarMakeItem } from '../interfaces';
import CustomButton from '../CustomButton/customButton';
import { years } from '@/app/constants';

interface IProps {
  vehicleMakes: ICarMakeItem[];
}

const Filtration = (props: IProps) => {
  const { vehicleMakes } = props;
  const [make, setMake] = useState<number>();
  const [year, setYear] = useState<number>();

  const data = useMemo(() => {
    return vehicleMakes?.map((item: ICarMakeItem) => ({
      value: item?.MakeId,
      label: item?.MakeName,
    }));
  }, [vehicleMakes]);

  return (
    <div className="flex flex-col gap-5 justify-center items-center	">
      <div className="flex flex-row gap-20">
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
      <div>
        <CustomButton
          buttonText="Next"
          disable={!make || !year}
          href={`/result/${make}/${year}`}
        />
      </div>
    </div>
  );
};

export default Filtration;

import LegendItem from '@/components/common/LegendItem';
import { LegendItemProps } from '@/utils/types';
import React from 'react';

interface Props extends LegendItemProps {
  value: string | number;
}

const Legend = ({ backgroundColor, text, value }: Props) => {
  return (
    <div className='flex flex-col '>
      <LegendItem backgroundColor={backgroundColor} text={text} />
      <p className='text-[#858585] text-xs pl-6'>{value}</p>
    </div>
  );
};

export default Legend;

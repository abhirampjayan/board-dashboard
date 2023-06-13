import { LegendItemProps } from '@/utils/types';
import React from 'react';

const LegendItem = ({ backgroundColor, text }: LegendItemProps) => {
  return (
    <div className='flex items-center'>
      <span
        style={{ backgroundColor }}
        className='w-[10px] h-[10px] flex rounded-full mr-3'
      ></span>
      <span>{text}</span>
    </div>
  );
};

export default LegendItem;

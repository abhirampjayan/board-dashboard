import React, { FC } from 'react';
import { openSans } from '@/configs/fonts';

type Props = {
  className: string;
  title: string;
  value: string;
  icon: React.JSX.Element;
};

const StatusTile: FC<Props> = ({ className, title, value, icon }) => {
  
  return (
    <div
      className={`px-[26px] py-[20px] flex flex-col rounded-[20px] min-w-max ${className}`}
    >
      <div className='flex justify-end'>{icon}</div>
      <div className='text-[14px]'>
        <p>{title}</p>
      </div>
      <div className={`text-[24px] font-bold ${openSans.className} pt-[5px]`}>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default StatusTile;

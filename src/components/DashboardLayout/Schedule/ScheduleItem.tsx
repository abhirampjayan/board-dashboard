import React from 'react';

type Props = {
  title: string;
  time: string;
  description: string;
  color?: string;
};

const ScheduleItem = ({
  title,
  time,
  description,
  color = '#dddddd',
}: Props) => {
  return (
    <div
      className='flex flex-col gap-[5px]  px-[15px] border-l-[5px]'
      style={{ borderColor: color }}
    >
      <h1 className='text-[#666666] font-bold text-sm'>{title}</h1>
      <p className='text-[#999999] text-sm'>{time}</p>
      <p className='text-[#999999] text-sm'>{description}</p>
    </div>
  );
};

export default ScheduleItem;

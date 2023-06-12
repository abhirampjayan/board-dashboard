import React from 'react';

type Props = {
  backgroundColor: string;
  text: string;
};

const LegendItem = ({ backgroundColor, text }: Props) => {
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

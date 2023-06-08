import { montserrat } from '@/configs/fonts';
import React from 'react';

type Props = {
  icon: React.JSX.Element;
  text: string;
  onClick?: () => void;
};

export const LoginIconButton = ({ icon, text, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className='bg-white min-h-[30px] rounded-[10px] py-[8px] px-[19px] flex justify-center items-center'
    >
      <span className='scale-150 md:scale-100 p-2 md:p-0'>{icon}</span>
      <span
        className={`ml-[10px] text-[#858585] hidden md:inline text-sm ${montserrat.className}`}
      >
        {text}
      </span>
    </button>
  );
};

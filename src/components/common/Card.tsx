import { montserrat } from '@/configs/fonts';
import React, { PropsWithChildren } from 'react';

type Props = {
  title: string;
  className?: string;
};

const Card = ({ className, children, title }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`bg-white flex flex-col rounded-[20px] py-[40px] w-full px-[30px] ${className}`}
    >
      <h1 className={`font-bold text-[18px] ${montserrat.className}`}>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Card;

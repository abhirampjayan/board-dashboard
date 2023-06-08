import React, { PropsWithChildren } from 'react';
import { montserrat } from '@/configs/fonts';

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col lg:grid min-h-screen lg:grid-cols-12'>
      <div
        className={`bg-black col-span-5 flex flex-col justify-center font-bold ${montserrat.className}`}
      >
        <h1 className='text-white py-4 mx-auto text-2xl md:text-6xl lg:text-8xl xl:text-9xl'>Board.</h1>
      </div>
      <div className='flex flex-grow col-span-7 p-4'>{children}</div>
    </div>
  );
};

export default LandingLayout;

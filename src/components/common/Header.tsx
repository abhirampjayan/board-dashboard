import React, { FC } from 'react';
import Search from '../DashboardLayout/Search';
import { NotificationIcon } from './icons/NotificationIcon';
import Avatar from './Avatar';
import { montserrat } from '@/configs/fonts';

type Props = {
  title?: string;
};

const Header: FC<Props> = ({ title }) => {
  return (
    <div className='h-[30px] flex w-full items-center'>
      <h2 className={`font-bold text-[24px] ${montserrat.className}`}>
        {title}
      </h2>
      <div className='flex flex-grow justify-end'>
        <Search />
        <button className='pl-[30px]'>
          <NotificationIcon />
        </button>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;

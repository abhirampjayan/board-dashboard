import React, { FC } from 'react';
import { SidebarMenuItem } from './SidebarMenuItem';
import {
  DashboardIcon,
  ScheduleIcon,
  SettingsIcon,
  TransactionIcon,
  UserIcon,
} from '../common/icons';
import { useRouter } from 'next/router';
import SidebarMenu from './SidebarMenu';
import { montserrat } from '@/configs/fonts';
import Link from 'next/link';

type Props = {
  className?: string;
};

const menuItems = [
  {
    icon: <DashboardIcon />,
    text: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: <TransactionIcon />,
    text: 'Transactions',
    href: '/transactions',
  },
  {
    icon: <ScheduleIcon />,
    text: 'Schedule',
    href: '/schedule',
  },
  {
    icon: <UserIcon />,
    text: 'Users',
    href: '/users',
  },
  {
    icon: <SettingsIcon />,
    text: 'Settings',
    href: '/settings',
  },
];

const Sidebar: FC<Props> = ({ className }) => {
  return (
    <div
      className={`bg-black py-[60px] px-[50px] rounded-[30px] flex flex-col text-white ${montserrat.className}`}
    >
      <h1 className='text-4xl font-bold'>Board.</h1>
      <SidebarMenu className='mt-[40px]' />
      <div className='grid gap-[10px] mt-[40px] text-[14px]'>
        <Link href='' className=''>
          Help
        </Link>
        <Link href='' className=''>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

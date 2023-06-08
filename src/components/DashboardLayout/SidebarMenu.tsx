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

const SidebarMenu: FC<Props> = ({ className }) => {
  const router = useRouter();
  return (
    <div className={`text-white flex-grow ${className}`}>
      {menuItems.map((item) => (
        <SidebarMenuItem
          key={item.text}
          {...item}
          className={`${router.pathname === item.href ? 'font-bold' : ''}`}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;

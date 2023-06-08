import Sidebar from '@/components/DashboardLayout/Sidebar';
import { montserrat } from '@/configs/fonts';
import { NextPageWithLayout } from '@/utils/types';
import React, { ReactElement } from 'react';

type Props = {};

const Dashboard: NextPageWithLayout<Props> = (props) => {
  return (
    <>
      <div className='h-[52-px] flex'>
        <h2 className={`font-bold text-[24px] ${montserrat.className}`}>Dashboard</h2>
      </div>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <div className='p-10 flex flex-row h-screen w-screen'>
      <Sidebar />
      <div className='ml-10 p-5 flex flex-grow'>{page}</div>
    </div>
  );
};

export default Dashboard;

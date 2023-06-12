import Sidebar from '@/components/DashboardLayout/Navigation';
import { NextPageWithLayout, StatusRespose } from '@/utils/types';
import { Session, getServerSession } from 'next-auth';
import React, { ReactElement } from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import Header from '@/components/common/Header';
import Status from '@/components/common/Status';
import axios from 'axios';
import Activities from '@/components/DashboardLayout/Activities';
import Head from 'next/head';
import TopProducts from '@/components/DashboardLayout/TopProducts';
import Schedule from '@/components/DashboardLayout/Schedule';

type Props = {
  data: { data: Session; status: StatusRespose };
};

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const status = await axios.get(`${process.env.NEXTAUTH_URL}/api/portal/status`);

  return {
    props: { data: { session, status: status.data } },
  };
}

const Dashboard: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header title='Dashboard' />
      <div className='mt-[40px] grid grid-cols-12 overflow-y-auto no-scrollbar gap-10'>
        <Status className='col-span-12' status={data.status} />
        <Activities className='col-span-12 max-h-min' />
        <TopProducts className='col-span-6' />
        <Schedule className='col-span-6' />
      </div>
    </>
  );
};

Dashboard.getLayout = (page: ReactElement) => {
  return (
    <div className='p-10 flex flex-row h-screen w-screen'>
      <Sidebar />
      <div className='ml-10 p-5 flex flex-col flex-grow'>{page}</div>
    </div>
  );
};

export default Dashboard;

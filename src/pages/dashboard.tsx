import Search from '@/components/DashboardLayout/Search';
import Sidebar from '@/components/DashboardLayout/Navigation';
import { NotificationIcon } from '@/components/common/icons/NotificationIcon';
import { montserrat } from '@/configs/fonts';
import { NextPageWithLayout } from '@/utils/types';
import { Session, getServerSession } from 'next-auth';
import React, { ReactElement } from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import Avatar from '@/components/common/Avatar';
import Header from '@/components/common/Header';

type Props = {
  data: Session;
};

export async function getServerSideProps(context: any) {
  let session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { data: session },
  };
}

const Dashboard: NextPageWithLayout<Props> = (props) => {
  return (
    <>
      <Header title='Dashboard' />
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

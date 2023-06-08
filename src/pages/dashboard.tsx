import Sidebar from '@/components/DashboardLayout/Navigation';
import { NextPageWithLayout, StatusRespose } from '@/utils/types';
import { Session, getServerSession } from 'next-auth';
import React, { ReactElement } from 'react';
import { authOptions } from './api/auth/[...nextauth]';
import Header from '@/components/common/Header';
import Status from '@/components/common/Status';
import axios from 'axios';

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
  const status = await axios.get('http://localhost:3000/api/portal/status');
  console.log(status.data);

  return {
    props: { data: { session, status: status.data } },
  };
}

const Dashboard: NextPageWithLayout<Props> = ({ data }) => {
  return (
    <>
      <Header title='Dashboard' />
      <Status status={data.status} />
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

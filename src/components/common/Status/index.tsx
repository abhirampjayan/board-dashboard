import React from 'react';
import StatusTile from './StatusTile';
import {
  TotalLikesIcon,
  TotalRevenueIcon,
  TotalTxnIcon,
  TotalUsers,
} from '../icons';
import { StatusRespose } from '@/utils/types';

type Props = {
  status: StatusRespose;
};

const Status = ({ status }: Props) => {
  return (
    <div className={`mt-[40px] grid gap-[36px] grid-cols-4`}>
      <StatusTile
        className='bg-statusGreen'
        title='Total Revenues'
        value={status.totalRevenues.value}
        icon={<TotalRevenueIcon />}
      />
      <StatusTile
        className='bg-[#F4ECDD]'
        title='Total Transactions'
        value={status.totalTxn.value}
        icon={<TotalTxnIcon />}
      />
      <StatusTile
        className='bg-[#EFDADA]'
        title='Total Likes'
        value={status.totalLikes.value}
        icon={<TotalLikesIcon />}
      />
      <StatusTile
        className='bg-[#DEE0EF]'
        title='Total Users'
        value={status.totalUsers.value}
        icon={<TotalUsers />}
      />
    </div>
  );
};

export default Status;

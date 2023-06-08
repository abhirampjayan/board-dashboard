// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { StatusRespose } from '@/utils/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StatusRespose>
) {
  res.status(200).json({
    totalRevenues: {
      title: 'Total Revenues',
      value: '$2,129,430',
    },
    totalTxn: {
      title: 'Total Transactions',
      value: '1,520',
    },
    totalLikes: {
      title: 'Total Likes',
      value: '9,721',
    },
    totalUsers: {
      title: 'Total Users',
      value: '892',
    },
  });
}

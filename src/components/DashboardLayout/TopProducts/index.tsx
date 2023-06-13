import Card from '@/components/common/Card';
import LegendItem from '@/components/common/LegendItem';
import { pieGraphOptions } from '@/configs/graphOptions';
import {
  Chart as ChartJS,
  ArcElement,
  Legend as pieLegend,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import Legend from './Legend';

ChartJS.register(ArcElement, Tooltip, pieLegend);

type Props = {
  className?: string;
};

const TopProducts = (props: Props) => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [30, 19, 3],
        backgroundColor: ['#98D89E', '#EE8484', '#F6DC7D'],
        borderColor: ['#98D89E', '#EE8484', '#F6DC7D'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card title={'Top Product'} {...props}>
      <div className='grid mt-[20px] grid-cols-2 px-6 items-center h-full'>
        <div className='max-h-[146px] flex flex-col justify-center items-center'>
          <Pie data={data} options={pieGraphOptions} />
        </div>
        <div className='flex flex-col justify-around gap-[20px]'>
          <Legend backgroundColor='#98D89E' text='Basic Tees' value={'30%'} />
          <Legend
            backgroundColor='#EE8484'
            text='Custom Short Pants'
            value={'3%'}
          />
          <Legend backgroundColor='#F6DC7D' text='Super Hoodies' value={'19%'} />
        </div>
      </div>
    </Card>
  );
};

export default TopProducts;

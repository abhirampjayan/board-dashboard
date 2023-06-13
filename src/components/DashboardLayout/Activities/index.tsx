import { montserrat } from '@/configs/fonts';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { _DeepPartialObject } from 'chart.js/dist/types/utils';
import LegendItem from '../../common/LegendItem';
import Card from '@/components/common/Card';
import { lineGraphOptions } from '@/configs/graphOptions';

type Props = {
  className?: string;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Activities = ({ className }: Props) => {
  const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  return (
    <Card title='Activities' className={className}>
      <div
        className={`flex max-h-[160px] w-full ${montserrat.className} justify-between text-[#858585] text-[14px]`}
      >
        <span>May - June 2021</span>
        <div className='grid gap-[35px] grid-cols-2 mx-[40px]'>
          <LegendItem backgroundColor='#E9A0A0' text='Guest' />
          <LegendItem backgroundColor='#9BDD7C' text='User' />
        </div>
      </div>
      <div className='w-full max-h-[200px] mt-[30px]'>
        <Line
          className='w-full h-full'
          options={lineGraphOptions}
          data={{
            labels,
            datasets: [
              {
                label: 'Dataset 1',
                data: [200, 130, 400, 300],
                borderColor: 'rgba(155, 221, 124, 1)',
                backgroundColor: 'rgba(155, 221, 124, 1)',
              },
              {
                label: 'Dataset 1',
                data: [100, 180, 270, 380],
                borderColor: 'rgba(233, 160, 160, 1)',
                backgroundColor: 'rgba(233, 160, 160, 1)',
              },
            ],
          }}
        />
      </div>
    </Card>
  );
};

export default Activities;

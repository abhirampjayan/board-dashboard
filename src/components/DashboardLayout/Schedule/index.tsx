import Card from '@/components/common/Card';
import React from 'react';
import ScheduleItem from './ScheduleItem';

type Props = {
  className?: string;
};

const Schedule = (props: Props) => {
  return (
    <Card title={`Today's Schedule`} {...props}>
      <div className='pt-[25px] grid gap-[13px]'>
        <ScheduleItem
          title='Meeting with suppliers from Kuta Bali'
          time='14.00-15.0'
          description='at Sunset Road, Kuta, Bali'
          color='#9BDD7C'
        />
        <ScheduleItem
          title='Check operation at Giga Factory 1'
          time='18.00-20.00'
          description='at Central Jakarta'
          color='#6972C3'
        />
      </div>
    </Card>
  );
};

export default Schedule;

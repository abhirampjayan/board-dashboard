import Card from '@/components/common/Card';
import React from 'react';

type Props = {
  className?: string;
};

const Schedule = (props: Props) => {
  return (
    <Card title={`Today's Schedule`} {...props}>
      
    </Card>
  );
};

export default Schedule;

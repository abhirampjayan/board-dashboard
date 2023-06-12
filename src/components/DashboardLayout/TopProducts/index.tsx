import Card from '@/components/common/Card';
import React from 'react';

type Props = {
  className?: string;
};

const TopProducts = (props: Props) => {
  return <Card title={'Top Products'} {...props}></Card>;
};

export default TopProducts;

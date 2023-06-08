import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface StatusItem {
  title: string;
  value: string;
}

export interface StatusRespose {
  [key: string]: StatusItem;
}

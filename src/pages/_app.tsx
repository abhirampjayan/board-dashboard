import { lato } from '@/configs/fonts';
import '@/styles/globals.css';
import { NextPageWithLayout } from '@/utils/types';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import axios from 'axios';

axios.defaults.baseURL = `${process.env.NEXTAUTH_URL}/api`;

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

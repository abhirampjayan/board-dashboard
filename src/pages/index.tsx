import SiginInForm from '@/components/HomePage/SiginInForm';
import { LoginIconButton } from '@/components/common/LoginIconButton';
import { AppleIcon, GoogleIcon } from '@/components/common/icons';
import LandingLayout from '@/components/layouts/LandingLayout';
import { montserrat } from '@/configs/fonts';
import { NextPageWithLayout } from '@/utils/types';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

type Props = {};

const Home: NextPageWithLayout<Props> = () => {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className='flex mx-auto flex-col justify-center w-full md:w-auto '>
        <h1 className={`text-4xl font-bold mb-[5px] ${montserrat.className}`}>
          Sign In
        </h1>
        <div>Sign in to your account</div>
        <div className='w-full mt-5 md:mt-[26px]'>
          <div className='grid grid-cols-2 gap-3 md:gap-6'>
            <LoginIconButton
              icon={<GoogleIcon />}
              text='Sign in with Google'
              onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            />
            <LoginIconButton
              onClick={() => signIn('apple', { callbackUrl: '/dashboard' })}
              icon={<AppleIcon />}
              text='Sign in with Apple'
            />
          </div>
          <SiginInForm />
        </div>
        <div className='mt-[20px] flex justify-center'>
          <p className='text-[#858585]'>
            Dont have an account?{' '}
            <Link href={''} className='text-[#346BD4]'>
              Register here
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>SIGN OUT</div>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
};

Home.getLayout = (page: ReactElement) => {
  return (
    <>
      <LandingLayout>{page}</LandingLayout>
    </>
  );
};

export default Home;

import React from 'react';
import { TextInput } from '../common/TextInput';
import { montserrat } from '@/configs/fonts';
import Link from 'next/link';

type Props = {};

const SiginInForm = (props: Props) => {
  return (
    <div className='bg-white grid mt-[25px] p-[30px] rounded-[20px]'>
      <TextInput label='Email address' type='email' />
      <TextInput label='Password' type='password' className='mt-[20px]' />
      <div className='my-[20px]'>
        <Link href='' className='text-[#346BD4]'>
          Forgot password?
        </Link>
      </div>
      <div className=''>
        <button
          className={`bg-black py-[10px] rounded-[10px] w-full text-white font-bold ${montserrat.className}`}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SiginInForm;

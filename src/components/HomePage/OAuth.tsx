import React from 'react';
import { LoginIconButton } from '../common/LoginIconButton';
import { AppleIcon, GoogleIcon } from '../common/icons';
import { signIn } from 'next-auth/react';

const OAuth = () => {
  return (
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
  );
};

export default OAuth;

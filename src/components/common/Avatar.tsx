import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Avatar = () => {
  const { data: session } = useSession();
  return (
    <div onClick={()=>signOut()} className='ml-[30px] overflow-hidden grid place-content-center rounded-full h-[30px] w-[30px] bg-white'>
      <Image
        src={session?.user?.image || '/vercel.svg'}
        alt={''}
        width={30}
        height={30}
      />
    </div>
  );
};

export default Avatar;

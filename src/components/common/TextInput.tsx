import { FC, useEffect, useState } from 'react';

type Props = {
  label: string;
  validator?: () => boolean | string;
  defaultErrorMessage?: string;
  className?: string;
  type?: 'text' | 'email' | 'password';
  hidden?: boolean;
};

export const TextInput: FC<Props> = ({
  label,
  className = '',
  type = 'text',
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isValidEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      );
    // setError(isValidEmail ? '' : 'Invalid email address');
  }, [email]);

  return (
    <div className={`w-full flex flex-col ${className}`}>
      <label className='mb-2.5' htmlFor='email'>
        {label}
      </label>
      <input
        className='bg-[#F5F5F5] focus:bg-[#EAEAEA] outline-none px-[15px] pt-[11px] pb-[10px] rounded-[10px]'
        id='email'
        type={type}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span className='error'>{error}</span>
    </div>
  );
};

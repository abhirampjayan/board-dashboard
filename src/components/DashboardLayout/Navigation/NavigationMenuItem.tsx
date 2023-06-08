import Link from 'next/link';
import React from 'react';

type Props = {
  icon: React.JSX.Element;
  text: string;
  href?: string;
  className?: string;
};

export const NavigationMenuItem = ({
  icon,
  text,
  href = '',
  className = '',
}: Props) => {
  return (
    <Link
      href={href}
      className={`min-h-[30px] py-[10px] my-[10px] min-w-[180px] flex items-center ${className}`}
    >
      <span className=''>{icon}</span>
      <span
        className={`ml-[20px] hidden md:inline text-lg`}
      >
        {text}
      </span>
    </Link>
  );
};

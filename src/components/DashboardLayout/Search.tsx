import React from 'react';
import { SearchIcon } from '../common/icons';

type Props = {};

const Search = (props: Props) => {
  return (
    <div className='bg-white max-h-[30px] flex px-[15px] rounded-[10px] max-w-[180px] items-center'>
      <input
        type='search'
        placeholder='Search...'
        name='search'
        className='pt-[6px] pb-[7px] bg-transparent text-[14px] max-w-[138px] outline-none h-full'
      />
      <span className=''>
        <SearchIcon />
      </span>
    </div>
  );
};
export default Search;

import { FC } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export const SearchRooms: FC = (): JSX.Element => {
  return (
    <div className='rooms-list-search-container'>
      <form className='rooms-list-search-form'>
        <input
          placeholder='Explore...'
          className='rooms-list-search-form-input'
        />
        <button className='rooms-list-search-form-btn'>
          <IoSearchOutline size={26} />
        </button>
      </form>
    </div>
  );
};

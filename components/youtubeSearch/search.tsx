import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import { FaSearch } from 'react-icons/fa';

interface Props {
  inputRef: MutableRefObject<null>;
  searchKeyword: string;
  handleFocus: () => void;
  handleSearch: (keyword?: string) => void;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

export default function Search({
  inputRef,
  searchKeyword,
  handleFocus,
  handleSearch,
  setSearchKeyword,
}: Props) {
  return (
    <div className='flex items-center'>
      <span className='mr-1'>운동 방법 검색: </span>
      <input
        ref={inputRef}
        value={searchKeyword}
        onClick={handleFocus}
        maxLength={15}
        onChange={(e) => setSearchKeyword(e.target.value)}
        className='border-solid border-l-2 border-t-2 border-b-2 border-black rounded-l-md focus:outline-none'
      />
      <div
        onClick={() => handleSearch()}
        className='border-solid border-2 border-l-0 p-1 border-black rounded-r-md cursor-pointer'
      >
        <FaSearch />
      </div>
    </div>
  );
}

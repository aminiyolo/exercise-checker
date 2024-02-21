import { CSSProperties, Dispatch, SetStateAction } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { searchListType } from './youtubeSearch';

interface Props {
  style: CSSProperties;
  searchList: searchListType[];
  handleDelete: (id: number) => void;
  handleDeleteAll: () => void;
  handleSearch: (keyword?: string) => void;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
}

const HistoryList = ({
  style,
  searchList,
  handleDelete,
  handleDeleteAll,
  handleSearch,
  setSearchKeyword,
}: Props) => {
  return (
    <div
      style={style}
      className='fixed bg-white p-1 z-10 border-b-2 rounded-md'
    >
      <div className='flex justify-between'>
        <h4 className='text-left text-sm mb-1 font-semibold'>최근 검색어</h4>
        <span
          onClick={handleDeleteAll}
          className='text-xs text-slate-400 cursor-pointer'
        >
          전체 기록 삭제
        </span>
      </div>
      {searchList.map(({ keyword, id }) => (
        <span
          key={id}
          className='flex justify-between items-center text-[13px] cursor-pointer'
          onClick={() => {
            setSearchKeyword(keyword);
            handleSearch(keyword);
          }}
        >
          {keyword}
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(id);
            }}
          >
            <IoCloseOutline />
          </span>
        </span>
      ))}
    </div>
  );
};

export default HistoryList;

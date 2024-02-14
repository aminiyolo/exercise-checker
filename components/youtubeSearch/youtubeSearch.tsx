'use client';
import useOutsideClick from '@/hook/useOutsideClick';
import { CSSProperties, useCallback, useEffect, useRef, useState } from 'react';
import Search from './search';
import HistoryList from './historyList';

export type searchListType = {
  keyword: string;
  id: number;
};

export default function YoutubeSearch() {
  const inputRef = useRef(null);
  const [searchList, setSearchList] = useState<searchListType[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [style, setStyle] = useState<CSSProperties>({});

  // 검색창 클릭
  const handleFocus = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    const { width } = (inputRef.current as HTMLElement).getBoundingClientRect();
    setStyle({
      width: width + 23,
      left: width - 40,
    });
    setIsFocus(true);
  }, []);

  // 검색
  const handleSearch = useCallback(
    (keyword = '') => {
      if (!searchKeyword && !keyword) {
        return;
      }

      const _searchKeyword = searchKeyword || keyword;
      const uniqueList = searchList.filter(
        (list) => list.keyword !== _searchKeyword,
      );

      const newList = [
        { keyword: _searchKeyword, id: Math.random() },
        ...uniqueList.slice(0, 4),
        // 최근 검색어는 최대 5개 까지만 저장
      ];

      localStorage.setItem('search_list', JSON.stringify(newList));
      setSearchList(newList);
      setIsFocus(false);
    },
    [searchList, searchKeyword],
  );

  // 선택 기록 삭제
  const handleDelete = useCallback(
    (id: number) => {
      const filteredList = searchList.filter((list) => list.id !== id);
      setSearchList(filteredList);
      localStorage.setItem('search_list', JSON.stringify(filteredList));
    },
    [searchList],
  );

  // 전체 기록 삭제
  const handleDeleteAll = useCallback(() => {
    setSearchList([]);
    localStorage.setItem('search_list', JSON.stringify([]));
  }, []);

  useEffect(() => {
    // 화면 리사이즈시 검색창 히스토리 닫기
    window.addEventListener('resize', () => setIsFocus(false));
    return () => window.removeEventListener('resize', () => setIsFocus(false));
  }, []);

  useEffect(() => {
    // Enter 키 입력시
    const keydownEvent = (e: KeyboardEvent) => {
      if (e.key === 'Enter') handleSearch();
    };

    window.addEventListener('keydown', keydownEvent);
    return () => window.removeEventListener('keydown', keydownEvent);
  }, [handleSearch]);

  useEffect(() => {
    // 로컬스토리지에서 검색어 히스토리 가져와 저장
    const searchHistory = localStorage.getItem('search_list');
    if (searchHistory) setSearchList(JSON.parse(searchHistory));
  }, []);

  useOutsideClick(inputRef, () => setIsFocus(false));
  return (
    <div>
      <div className='relative p-10'>
        <Search
          inputRef={inputRef}
          searchKeyword={searchKeyword}
          handleFocus={handleFocus}
          handleSearch={handleSearch}
          setSearchKeyword={setSearchKeyword}
        />
        {isFocus && searchList.length > 0 && (
          <HistoryList
            style={style}
            searchList={searchList}
            handleDelete={handleDelete}
            handleDeleteAll={handleDeleteAll}
            handleSearch={handleSearch}
            setSearchKeyword={setSearchKeyword}
          />
        )}
      </div>
      <div className='p-6'>Video area</div>
    </div>
  );
}

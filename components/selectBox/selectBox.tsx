import useOutsideClick from '@/hook/useOutsideClick';
import { Dispatch, ReactNode, SetStateAction, useRef } from 'react';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  extraCSS: string;
  selected: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SelectBox({
  children,
  extraCSS,
  width,
  height,
  selected,
  open,
  setOpen,
}: Props) {
  const SelectBox = useRef<HTMLElement>(null);
  useOutsideClick(SelectBox, () => setOpen(false));
  return (
    <span
      ref={SelectBox}
      className={`relative w-[${width}rem] ${extraCSS}`}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((prev) => !prev);
      }}
    >
      <div className='relative flex py-[2px] px-[1px] items-center justify-center border-solid border-2 border-black rounded-[3px]'>
        <label
          className={`w-full ml-2 text-[1rem] cursor-pointer ${
            selected ? 'text-left' : 'text-center'
          }`}
        >
          {selected || '-'}
        </label>
        <span className='absolute right-2 cursor-pointer'>
          {open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </span>
      </div>
      {/* 셀렉트 리스트 영역 */}
      {open && (
        <div
          className={`absolute mt-1 border-solid border-2 border-black rounded-[3px] z-2 bg-[#284C7C] text-white w-[${width}rem] h-[${height}rem]`}
        >
          {children}
        </div>
      )}
    </span>
  );
}

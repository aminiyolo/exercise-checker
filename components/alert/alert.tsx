'use client';

import { useEffect } from 'react';
import { useAlert } from './useAlert';

export default function Alert() {
  const { isOpen, content, state, closeAlert } = useAlert();

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert();
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className={`fixed right-2 top-[2%] p-8 bg-white z-3 w-[20rem] h-[5rem] border-solid border-4 rounded-md flex justify-center items-center 
      ${
        isOpen
          ? 'transition-opacity duration-500 opacity-100 z-5'
          : 'opacity-0 -z-[1]'
      } 
      ${
        state === 'success'
          ? 'border-[#0E9D58] text-[#0E9D58]'
          : 'border-[#D52D25] text-[#D52D25]'
      }
      `}
    >
      <div>{content}</div>
    </div>
  );
}

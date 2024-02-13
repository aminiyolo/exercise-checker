'use client';

import { useEffect } from 'react';
import { useAlert } from './useAlert';

export default function Alert() {
  const { isOpen, content, closeAlert } = useAlert();

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert();
    }, 2000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className={`fixed right-2 top-[2%] ${
        isOpen ? 'transition-opacity duration-500 opacity-100' : 'opacity-0'
      } p-6 bg-white z-3 w-[20rem] h-[5rem] border-solid border-[#D52D25] border-4 rounded-md text-center text-[#D52D25]`}
    >
      <div>{content}</div>
    </div>
  );
}

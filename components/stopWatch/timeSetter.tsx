import React, { Dispatch, MutableRefObject, SetStateAction } from 'react';

const commonStyle =
  'border-solid border-b-2 border-black w-10 text-right focus:outline-none';

interface Props {
  setMinutes: Dispatch<SetStateAction<number>>;
  setSeconds: Dispatch<SetStateAction<number>>;
  isProcessing: boolean;
  min: MutableRefObject<number>;
  sec: MutableRefObject<number>;
}

function TimeSetter({ setMinutes, setSeconds, isProcessing, min, sec }: Props) {
  return (
    <div className='flex flex-row p-4'>
      <input
        min={0}
        type='number'
        className={commonStyle}
        disabled={isProcessing}
        onChange={(e) => {
          const value = Number(e.target.value);
          setMinutes(value);
          min.current = value;
        }}
      />
      <span className='mx-2'>분</span>
      <input
        min={0}
        type='number'
        className={commonStyle}
        disabled={isProcessing}
        onChange={(e) => {
          const value = Number(e.target.value);
          setSeconds(value);
          sec.current = value;
        }}
      />
      <span className='ml-2'>초</span>
    </div>
  );
}

export default TimeSetter;

'use client';

import { useCallback, useRef, useState } from 'react';
import TimeSetter from './timeSetter';
import Controller from './controller';
import Timer from './timer';

function StopWatch() {
  const min = useRef(0); // 설정한 분
  const sec = useRef(0); // 설정한 초
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleClickStart = useCallback(() => {
    if (start) return;
    if (minutes + seconds === 0) return;
    setStart(true);
  }, [start, minutes, seconds]);

  const handleClickPause = useCallback(() => {
    if (!start) return;
    setStart(false);
    setPause(true);
  }, [start]);

  const handleClickReset = useCallback(() => {
    setMinutes(min.current);
    setSeconds(sec.current);
    setStart(false);
    setPause(false);
  }, [min.current, sec.current]);

  return (
    <div className='flex flex-col justify-center items-center h-[23rem] p-6 m-6 w-[20rem] border-solid border-2 border-[#284C7C] rounded-md mx-auto md:h-[19.5rem] md:w-[29.5rem]'>
      <div className='p-4'>
        <h2 className='text-[1.2rem] font-semibold'>STOP WATCH</h2>
      </div>
      <Timer
        start={start}
        minutes={minutes}
        seconds={seconds}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Controller
        handleClickStart={handleClickStart}
        handleClickPause={handleClickPause}
        handleClickReset={handleClickReset}
      />
      <TimeSetter
        min={min}
        sec={sec}
        isProcessing={start || pause}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
    </div>
  );
}

export default StopWatch;

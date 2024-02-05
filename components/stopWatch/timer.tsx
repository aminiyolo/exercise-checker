import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface Props {
  start: boolean;
  minutes: number;
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
  setMinutes: Dispatch<SetStateAction<number>>;
}

function Timer({ minutes, seconds, setSeconds, setMinutes, start }: Props) {
  useEffect(() => {
    const timer = setInterval(() => {
      // 아직 0초 이상이라면, 초 카운트다운
      if (seconds > 0) {
        setSeconds((prev) => prev - 1);
      }

      // 0초가 되었다면, 분 단위 변경
      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        }

        // 설정된 시간이 모두 경과 했을 때
        if (minutes === 0 && seconds === 0) {
          clearInterval(timer);
        }
      }
    }, 1000);

    if (!start) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [minutes, seconds, start]);

  return (
    <div id='timer'>
      <span>{minutes >= 10 ? minutes : `0${minutes}`}분</span>
      <span className='p-1' />
      <span>{seconds >= 10 ? seconds : `0${seconds}`}초</span>
    </div>
  );
}

export default Timer;

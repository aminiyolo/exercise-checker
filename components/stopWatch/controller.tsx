import React from 'react';

interface Props {
  handleClickStart: () => void;
  handleClickPause: () => void;
  handleClickReset: () => void;
}

function Controller({
  handleClickStart,
  handleClickPause,
  handleClickReset,
}: Props) {
  return (
    <div id='controller'>
      <button className='m-1' onClick={handleClickStart}>
        START
      </button>
      <button className='m-1' onClick={handleClickPause}>
        PAUSE
      </button>
      <button className='m-1' onClick={handleClickReset}>
        RESET
      </button>
    </div>
  );
}

export default Controller;

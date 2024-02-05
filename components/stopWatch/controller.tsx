import React from 'react';

const BUTTONS = ['START', 'PAUSE', 'RESET'] as const;

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
  const handleClick = {
    START: handleClickStart,
    PAUSE: handleClickPause,
    RESET: handleClickReset,
  };
  return (
    <div id='controller' className='p-4'>
      {BUTTONS.map((button) => (
        <button
          onClick={handleClick[button]}
          className='m-1 p-1 border-solid border-2 border-[#284C7C] rounded-md hover:bg-[#284C7C] hover:text-white'
        >
          {button}
        </button>
      ))}
    </div>
  );
}

export default Controller;

import { EXERCISE } from '@/constant';
import React, { Dispatch, SetStateAction } from 'react';
import { ExerciseNameType } from './type';

interface Props {
  selectedExercise: ExerciseNameType;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

function Controller({ selectedExercise, count, setCount }: Props) {
  return (
    <div className='p-3'>
      <span>
        {EXERCISE.find((exer) => exer.name === selectedExercise)?.type ??
          '횟수'}
      </span>
      <input
        min={0}
        type='number'
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className='w-[4rem] ml-2 border-solid border-b-2 border-black text-right'
      />
      <span>(개 / 분)</span>
    </div>
  );
}

export default Controller;

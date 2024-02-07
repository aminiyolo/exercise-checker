import SelectBox from '@/components/selectBox';
import { EXERCISE } from '@/constant';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
import { ExerciseNameType } from './type';

interface Props {
  open: boolean;
  selectedExercise: ExerciseNameType;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleChangeExercise: (e: MouseEvent) => void;
}

export default function Select({
  open,
  selectedExercise,
  setOpen,
  handleChangeExercise,
}: Props) {
  return (
    <div className='flex p-3 w-full'>
      <span className='mt-1'>운동 : </span>
      <SelectBox
        open={open}
        width={'7rem'}
        extraCSS={'ml-2'}
        selected={selectedExercise}
        setOpen={setOpen}
      >
        {/* 이벤트 위임 */}
        <ul onClick={handleChangeExercise}>
          {EXERCISE.map((exer) => (
            <li
              key={exer.name}
              data-type={exer.type}
              className={`pl-2 p-1 cursor-pointer hover:text-[#284C7C] hover:bg-[white] ${
                selectedExercise === exer.name && 'text-green-100'
              }`}
            >
              {exer.name}
            </li>
          ))}
        </ul>
      </SelectBox>
    </div>
  );
}

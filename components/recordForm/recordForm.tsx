'use client';

import { MouseEvent, useCallback, useState } from 'react';
import FormButton from './formButton';
import TodayRecord from './todayRecord';
import Controller from './controller';
import Select from './select';
import {
  EditRecordType,
  ExerciseCountType,
  ExerciseNameType,
  RecordType,
} from './type';
import { useAlert } from '../alert/useAlert';

export default function RecordForm() {
  const { openErrorAlert, openSuccessAlert } = useAlert();
  const [open, setOpen] = useState<boolean>(false);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [records, setRecords] = useState<RecordType[]>([]);
  const [count, setCount] = useState(0);
  const [type, setType] = useState<ExerciseCountType>('분');
  const [modifyIndex, setModifyIndex] = useState<number>(0);
  const [selectedExercise, setSelectedExercise] =
    useState<ExerciseNameType>('');

  // form 초기화
  const initialize = () => {
    setSelectedExercise('');
    setCount(0);
    setType('');
    setIsModify(false);
  };

  // 운동 변경
  const handleChangeExercise = (e: MouseEvent) => {
    e.stopPropagation();
    const { innerText, dataset } = e.target as HTMLElement;
    setSelectedExercise(innerText as ExerciseNameType);
    setType(dataset.type === '시간' ? '분' : '개');
    setOpen(false);
  };

  // 운동 기록 수정
  const handleEdit = useCallback(
    ({ name, count, type, idx }: EditRecordType) => {
      setSelectedExercise(name);
      setCount(count);
      setType(type);
      setIsModify(true);
      setModifyIndex(idx);
    },
    [],
  );

  // 운동 기록 삭제
  const handleDelete = useCallback(
    (idx: number) => {
      if (modifyIndex === idx) {
        openErrorAlert('수정 중인 목록은 삭제할 수 없습니다.');
        return;
      }

      const copy = [...records];
      copy.splice(idx, 1);
      setRecords(copy);
    },
    [records, modifyIndex],
  );

  // 운동 기록 저장/수정
  const handleSubmit = useCallback(() => {
    if (!selectedExercise || !count) {
      return;
    }

    const newRecord = { name: selectedExercise, count, type };
    if (isModify) {
      const copy = [...records];
      copy.splice(modifyIndex, 1, newRecord);
      setRecords(copy);
      openSuccessAlert('수정을 완료 했습니다.');
    } else {
      setRecords((prev) => [...prev, newRecord]);
    }

    initialize();
  }, [selectedExercise, count, type, isModify, records]);

  return (
    <div
      id='record-form'
      className='w-[22.5rem] h-[20rem] border-solid border-2 border-[#284C7C] rounded-md mx-auto md:h-[18rem] md:w-[32rem]'
    >
      <h2 className='text-lg font-semibold text-center p-4'>
        오늘의 운동 기록
      </h2>
      <div className='flex items-center'>
        <div className='ml-4 w-[14rem] text-[0.95rem]'>
          <Select
            open={open}
            selectedExercise={selectedExercise}
            setOpen={setOpen}
            handleChangeExercise={handleChangeExercise}
          />
          <Controller
            count={count}
            selectedExercise={selectedExercise}
            setCount={setCount}
          />
          <FormButton
            isModify={isModify}
            handleSubmit={handleSubmit}
            handleEditCancle={initialize}
          />
        </div>
        <TodayRecord
          records={records}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

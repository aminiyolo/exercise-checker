import { EditRecordType, RecordType } from './type';
import { MdDeleteOutline } from 'react-icons/md';
import { MdOutlineModeEditOutline } from 'react-icons/md';

interface Props {
  records: RecordType[];
  handleEdit: ({ name, count, type, idx }: EditRecordType) => void;
  handleDelete: (idx: number) => void;
}

export default function TodayRecord({
  records,
  handleEdit,
  handleDelete,
}: Props) {
  return (
    <div className='border-solid border-2 border-black p-2 mt-2 mr-1 w-[50%] h-[12rem] overflow-y-auto'>
      <h1 className='text-center font-semibold border-solid border-b-2 border-black mb-1'>
        운동 기록
      </h1>
      <div>
        {records.map((record, idx) => {
          const { name, count, type } = record;
          return (
            <div className='flex justify-between mx-2 text-[0.9rem]'>
              <div>
                <span>{name} : </span>
                <span>{count}</span>
                <span>{type}</span>
              </div>
              <div className='flex'>
                <span
                  id='edit'
                  className='cursor-pointer mr-1'
                  onClick={() => handleEdit({ name, count, type, idx })}
                >
                  <MdOutlineModeEditOutline />
                </span>
                <span
                  id='delete'
                  className='cursor-pointer'
                  onClick={() => handleDelete(idx)}
                >
                  <MdDeleteOutline />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

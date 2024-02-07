interface Props {
  isModify: boolean;
  handleSubmit: () => void;
  handleEditCancle: () => void;
}

export default function FormButton({
  isModify,
  handleSubmit,
  handleEditCancle,
}: Props) {
  return (
    <div className='p-3 mt-2 text-left'>
      <button
        onClick={handleSubmit}
        className='border-solid border-2 border-black py-2 px-4 rounded-md mr-[2px] mt-3 sm:py-1 sm: px-2'
      >
        {isModify ? '수정' : '저장'}하기
      </button>
      {isModify && (
        <button
          onClick={handleEditCancle}
          className='border-solid border-2 border-black py-2 px-4 rounded-md mt-3 sm:py-1 sm: px-2'
        >
          취소하기
        </button>
      )}
    </div>
  );
}

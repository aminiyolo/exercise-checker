import { ClipLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className='relative'>
      <div className='absolute left-[50%] translate-y-[110%] -translate-x-[50%]'>
        <ClipLoader color='#284C7C' />
      </div>
    </div>
  );
};

export default Spinner;

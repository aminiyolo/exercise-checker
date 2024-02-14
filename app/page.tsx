import Records from '@/components/records';
import Calendars from '@/components/calendar';
import StopWatch from '@/components/stopwatch';
import RecordForm from '@/components/recordForm';
import Alert from '@/components/alert';
import YoutubeSearch from '@/components/youtubeSearch';

export default function Home() {
  return (
    <div className='h-full w-fit mb-[5rem]'>
      <div className='flex flex-col w-screen xl:flex xl:flex-row xl:h-screen md:justify-center'>
        <div id='left' className='flex flex-col flex-1 items-center'>
          <Calendars />
          <Records />
        </div>
        <div id='center' className='flex flex-1 flex-col'>
          <StopWatch />
          <RecordForm />
        </div>
        <div id='right' className='flex flex-1 justify-center  text-center'>
          <YoutubeSearch />
        </div>
      </div>
      <Alert />
    </div>
  );
}

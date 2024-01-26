'use client';
import { userInfoState } from '@/recoil/userInfo';
import { signOut } from 'next-auth/react';
import { useRecoilValue } from 'recoil';
import { useCheckSession } from './useCheckSession';

function Nav() {
  const userInfo = useRecoilValue(userInfoState);
  useCheckSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' });
  };

  return (
    <nav className='relative flex flex-col bg-color p-3 w-screen items-center text-white rounded-b-sm sm:w-full'>
      <>
        <p className='text-2xl mb-2'>Exercise-Checker</p>
        <p className='text-md'>운동 기록 남기기.</p>
        {userInfo && (
          <button
            onClick={handleLogout}
            className='fixed right-3 top-5 p-2 bg-slate-800 rounded-lg'
          >
            로그아웃
          </button>
        )}
      </>
    </nav>
  );
}

export default Nav;

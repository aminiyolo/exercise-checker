'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Nav() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) router.push('/');
  if (!session) router.push('/login');

  return (
    <nav className='relative flex flex-col bg-color w-screen p-3 items-center text-white rounded-b-sm'>
      <>
        <p className='text-2xl mb-2'>Exercise-Checker</p>
        <p className='text-md'>운동 기록 남기기.</p>
        {session && (
          <button
            onClick={() => signOut()}
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

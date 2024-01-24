'use client';
import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) router.push('/');
  return (
    <div className='login-bg flex flex-col items-center justify-center h-[87vh]'>
      <button
        onClick={() => signIn('google')}
        className='px-4 py-2 bg-black border z-10 flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150'
      >
        <Image
          width={50}
          height={50}
          className='w-6 h-6'
          src='https://www.svgrepo.com/show/475656/google-color.svg'
          loading='lazy'
          alt='google logo'
        />
        <span>Login with Google</span>
      </button>
    </div>
  );
}

export default Page;

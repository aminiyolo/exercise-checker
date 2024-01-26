import { useSetRecoilState } from 'recoil';
import { userInfoState } from '@/recoil/userInfo';
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function useCheckSession() {
  const setUserInfo = useSetRecoilState(userInfoState);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const res = await getSession();

      if (!res?.user?.name) router.push('/login');
      // user.name이 없다면 session이 없으므로, login 페이지로 이동

      if (res?.user?.name) {
        // user.name이 있다면, 스토에 값을 저장하고 홈으로 이동
        const { user } = res;
        setUserInfo({
          email: user?.email,
          image: user?.image,
          name: user?.name,
        });
        router.push('/');
      }
    };

    checkSession();
  }, []);
}

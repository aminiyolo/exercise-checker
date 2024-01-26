'use client';
import { atom } from 'recoil';

type Info = string | null | undefined;
type UserInfo = {
  email: Info;
  image: Info;
  name: Info;
};

const userInfoState = atom<UserInfo | null>({
  key: 'userInfoState',
  default: null,
});

export { userInfoState };

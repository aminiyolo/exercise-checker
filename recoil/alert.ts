import { atom } from 'recoil';

type AlertStateType = {
  isOpen: boolean;
  content: string;
  callback?: () => void;
};

export const AlertState = atom<AlertStateType>({
  key: 'alertState',
  default: {
    isOpen: false,
    content: '',
    callback: () => {},
  },
});

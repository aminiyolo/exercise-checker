import { atom } from 'recoil';

export type AlertStateType = 'success' | 'error';
type AlertState = {
  isOpen: boolean;
  content: string;
  state: AlertStateType;
  callback?: () => void;
};

export const Alert = atom<AlertState>({
  key: 'alertState',
  default: {
    isOpen: false,
    content: '',
    state: 'success',
    callback: () => {},
  },
});

import { useCallback } from 'react';
import { Alert } from '@/recoil/alert';
import { useRecoilState } from 'recoil';

export const useAlert = () => {
  const [alertInfo, setAlertInfo] = useRecoilState(Alert);

  const openSuccessAlert = useCallback(
    (content: string, callback?: () => void) => {
      if (alertInfo.isOpen) {
        return;
      }

      setAlertInfo({
        isOpen: true,
        content,
        state: 'success',
        callback,
      });
    },
    [alertInfo.isOpen],
  );

  const openErrorAlert = useCallback(
    (content: string, callback?: () => void) => {
      if (alertInfo.isOpen) {
        return;
      }

      setAlertInfo({
        isOpen: true,
        content,
        state: 'error',
        callback,
      });
    },
    [alertInfo.isOpen],
  );

  const closeAlert = useCallback(() => {
    setAlertInfo({
      isOpen: false,
      content: '',
      state: 'success',
    });
  }, []);

  return {
    isOpen: alertInfo.isOpen,
    content: alertInfo.content,
    state: alertInfo.state,
    openSuccessAlert,
    openErrorAlert,
    closeAlert,
  };
};

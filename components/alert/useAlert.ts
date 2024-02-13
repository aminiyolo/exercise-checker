import { useCallback } from 'react';
import { AlertState } from '@/recoil/alert';
import { useRecoilState } from 'recoil';

export const useAlert = () => {
  const [alertInfo, setAlertInfo] = useRecoilState(AlertState);

  const openAlert = useCallback(
    (content: string, callback?: () => void) => {
      if (alertInfo.isOpen) {
        return;
      }

      setAlertInfo({
        isOpen: true,
        content,
        callback,
      });
    },
    [alertInfo.isOpen],
  );

  const closeAlert = useCallback(() => {
    setAlertInfo({
      isOpen: false,
      content: '',
    });
  }, []);

  return {
    isOpen: alertInfo.isOpen,
    content: alertInfo.content,
    openAlert,
    closeAlert,
  };
};

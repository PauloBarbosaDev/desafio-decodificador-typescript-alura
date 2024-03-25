import { useCallback } from 'react';

const useCopy = (): ((text: string) => void) => {
  const copyText = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
  }, []);

  return copyText;
};

export default useCopy;

import { useCallback } from "react";
import useEncrypter from "./useEncrypter";

const useCopy = (): ((text: string) => void) => {
  const { setToastColor, setToastIsOpen, setToastMessage } = useEncrypter();
  const copyText = useCallback(
    (text: string) => {
      setToastIsOpen(true);
      setToastColor("bg-success");
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);
      setToastMessage(`Valor copiado!`);
      navigator.clipboard.writeText(text);
    },
    [setToastColor, setToastIsOpen, setToastMessage]
  );

  return copyText;
};

export default useCopy;

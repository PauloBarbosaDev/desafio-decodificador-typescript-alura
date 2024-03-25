import { ChangeEvent, ReactNode, createContext, useState } from 'react';

interface EncryptContextProps {
  sourceText: string;
  targetText: string;
  resultMessage: string;
  copyButtonVisible: boolean;
  targetTextAreaVisible: boolean;
  asideImgVisible: boolean;
  asideTexts: boolean;
  handleSourceTextAreaChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
  handleEncrypText: () => void;
  handleDecrypText: () => void;
}

interface EncryptionMap {
  [key: string]: string;
}

export const EncrypterContext = createContext({} as EncryptContextProps);

export const EncrypterProvider = ({ children }: { children: ReactNode }) => {
  const [sourceText, setSourceText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [copyButtonVisible, setCopyButtonVisible] = useState(false);
  const [targetTextAreaVisible, setTargetTextAreaVisible] = useState(false);
  const [asideImgVisible, setAsideImgVisible] = useState(true);
  const [asideTexts, setAsideTexts] = useState(true);
  const [resultMessage, setResultMessage] = useState(
    'Apenas letras minúsculas e sem acento.'
  );

  const handleSourceTextAreaChange = (
    ev: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setSourceText(ev.target.value.toLowerCase());
  };

  const handleEncrypText = () => {
    const encryptedText: string = encryptor(true);
    setTargetText(encryptedText.toUpperCase());
  };

  const handleDecrypText = () => {
    const encryptedText: string = encryptor(false);
    setTargetText(encryptedText.toUpperCase());
  };

  const encryptor = (isEncrypt: boolean): string => {
    const vowelRegex: RegExp = /a|e|i|o|u/g;
    const specialWordRegex: RegExp = /ai|enter|imes|obter|ufat/g;

    const encryptionMap: EncryptionMap = {
      a: 'ai',
      e: 'enter',
      i: 'imes',
      o: 'obter',
      u: 'ufat',
    };

    const decryptionMap: EncryptionMap = {
      ai: 'a',
      enter: 'e',
      imes: 'i',
      obter: 'o',
      ufat: 'u',
    };

    const selectedMap = isEncrypt ? encryptionMap : decryptionMap;
    const selectedRegex = isEncrypt ? vowelRegex : specialWordRegex;

    const text: string = sourceText.replace(
      selectedRegex,
      (match: string) => selectedMap[match] || match
    );

    const isEncrypted: boolean = specialWordRegex.test(sourceText);

    if (!isEncrypt && !isEncrypted) {
      setResultMessage(`O valor não está criptografado para continuar.`);
      setSourceText('');
      return '';
    }

    if (text !== '' && !checkForSpecialCharacters(text)) {
      setCopyButtonVisible(true);
      setTargetTextAreaVisible(true);
      setAsideImgVisible(false);
      setAsideTexts(false);
      return text;
    } else {
      setCopyButtonVisible(false);
      setTargetTextAreaVisible(false);
      setAsideImgVisible(true);
      setAsideTexts(true);
    }

    return '';
  };

  const checkForSpecialCharacters = (text: string): boolean => {
    const specialCharRegex = /\W|_/;
    const containsSpecialChars = specialCharRegex.test(text);

    if (containsSpecialChars) {
      setResultMessage(`Caracteres especiais como acentos não são permitidos.`);
      setSourceText('');
    } else {
      setResultMessage(`Apenas letras minúsculas e sem acento.`);
    }

    return containsSpecialChars;
  };

  const value = {
    sourceText,
    targetText,
    copyButtonVisible,
    targetTextAreaVisible,
    asideImgVisible,
    asideTexts,
    resultMessage,
    handleSourceTextAreaChange,
    handleEncrypText,
    handleDecrypText,
  };

  return (
    <EncrypterContext.Provider value={value}>
      {children}
    </EncrypterContext.Provider>
  );
};
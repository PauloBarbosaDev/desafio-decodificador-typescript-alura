import { useContext } from 'react';
import { EncrypterContext } from '../context/EncrypterContext';

export default function useEncrypter() {
  return useContext(EncrypterContext);
}

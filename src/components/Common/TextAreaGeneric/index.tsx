import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface props {
  name: string;
  text: string;
  id: string;
  value: string;
  isReadOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaGeneric = ({
  name,
  text,
  id,
  value,
  isReadOnly,
  onChange,
}: props) => {
  return (
    <textarea
      className={styles.textAreaEncryptor}
      name={name}
      id={id}
      cols={30}
      rows={5}
      placeholder={text}
      value={value}
      onChange={onChange}
      readOnly={isReadOnly}
    ></textarea>
  );
};

export default TextAreaGeneric;

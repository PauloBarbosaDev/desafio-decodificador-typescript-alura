import styles from './styles.module.scss';

interface props {
  content: string;
  customClass?: string;
}

const BtnGeneric = ({ customClass, content }: props) => {
  return (
    <>
      <button
        className={`${styles[customClass !== undefined ? customClass : '']} ${
          styles.btnGeneric
        }`}
      >
        {content}
      </button>
    </>
  );
};

export default BtnGeneric;

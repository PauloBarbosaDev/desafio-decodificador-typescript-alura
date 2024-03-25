import styles from './styles.module.scss';

interface props {
  content: string;
  customClass?: string;
  onClick?: () => void;
  name: string;
  id: string;
}

const BtnGeneric = ({ customClass, content, onClick, name, id }: props) => {
  return (
    <>
      <button
        className={`${styles[customClass !== undefined ? customClass : '']} ${
          styles.btnGeneric
        }`}
        name={name}
        id={id}
        onClick={() => onClick && onClick()}
      >
        {content}
      </button>
    </>
  );
};

export default BtnGeneric;

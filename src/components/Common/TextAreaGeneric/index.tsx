import styles from './styles.module.scss';

const TextAreaGeneric = () => {
  return (
    <>
      <textarea
        className={styles.textAreaEncrytor}
        name="targetTextArea"
        id="targetTextArea"
        cols={30}
        rows={5}
      ></textarea>
    </>
  );
};

export default TextAreaGeneric;

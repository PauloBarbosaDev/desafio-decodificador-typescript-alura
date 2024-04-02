import useEncrypter from '../../../../hooks/useEncrypter';
import TextAreaGeneric from '../Common/TextAreaGeneric';
import Footer from './Footer';
import styles from './styles.module.scss';

const ContentSection = () => {
  const {
    sourceText,
    resultMessage,
    handleSourceTextAreaChange,
    handleEncrypText,
    handleDecrypText,
  } = useEncrypter();

  return (
    <>
      <section className={styles.content}>
        <TextAreaGeneric
          name="sourceTextArea"
          id="sourceTextArea"
          text="Digite o texto"
          value={sourceText}
          onChange={handleSourceTextAreaChange}
        />
        <Footer
          encryptOnClick={handleEncrypText}
          decryptOnClick={handleDecrypText}
          resultMessage={resultMessage}
        />
      </section>
    </>
  );
};

export default ContentSection;

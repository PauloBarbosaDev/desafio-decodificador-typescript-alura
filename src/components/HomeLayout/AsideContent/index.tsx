import useEncrypter from '../../../hooks/useEncrypter';
import useCopy from '../../../hooks/useCopy'; // Importe o hook useCopy
import BtnGeneric from '../../Common/BtnGeneric';
import TextAreaGeneric from '../../Common/TextAreaGeneric';
import styles from './styles.module.scss';

const AsideContent = () => {
  const {
    targetText,
    copyButtonVisible,
    targetTextAreaVisible,
    asideImgVisible,
    asideTexts,
  } = useEncrypter();

  // Use o hook useCopy para obter a função de cópia de texto
  const copyText = useCopy();

  const handleCopy = () => {
    copyText(targetText); // Chame a função de cópia de texto com o texto alvo
  };

  return (
    <>
      <aside className={styles.aside}>
        {targetTextAreaVisible && (
          <TextAreaGeneric
            id="targetTextArea"
            name="targetTextArea"
            text="Teste Saida"
            value={targetText}
            isReadOnly={true}
          />
        )}

        <img
          id="asideImg"
          className="mainContent--aside-img"
          src="../../../../homeLayout/asideImg.svg"
          alt="Imagem do Aside"
          style={{ visibility: asideImgVisible ? 'visible' : 'hidden' }}
        />

        <div
          id="textElements"
          className={styles.asideCaption}
          style={{ visibility: asideTexts ? 'visible' : 'hidden' }}
        >
          <h2>Nenhuma mensagem encontrada</h2>
          <p>
            Digite um texto que você deseja criptografar ou descriptografar.
          </p>
        </div>

        {copyButtonVisible && (
          <BtnGeneric
            name="copyButton"
            id="copyButton"
            content="Copiar"
            onClick={handleCopy}
          />
        )}
      </aside>
    </>
  );
};

export default AsideContent;

import useCopy from "../../../../hooks/useCopy";
import useEncrypter from "../../../../hooks/useEncrypter";
import BtnGeneric from "../Common/BtnGeneric";
import TextAreaGeneric from "../Common/TextAreaGeneric";
import ToastComponent from "../Common/Toast";
import styles from "./styles.module.scss";

const AsideContent = () => {
  const {
    targetText,
    copyButtonVisible,
    targetTextAreaVisible,
    asideImgVisible,
    asideTexts,
    toastColor,
    toastIsOpen,
    toastMessage,
  } = useEncrypter();

  const copyText = useCopy();

  const handleCopy = () => {
    copyText(targetText);
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
          className={styles.asideImg}
          src="../../../../homeLayout/asideImg.svg"
          alt="Imagem do Aside"
          style={{ visibility: asideImgVisible ? "visible" : "hidden" }}
        />

        <div
          id="textElements"
          className={styles.asideCaption}
          style={{ visibility: asideTexts ? "visible" : "hidden" }}
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
      <ToastComponent
        color={toastColor}
        isOpen={toastIsOpen}
        message={toastMessage}
      />
    </>
  );
};

export default AsideContent;

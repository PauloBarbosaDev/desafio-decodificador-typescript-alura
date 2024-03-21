import styles from './styles.module.scss';

const AsideContent = () => {
  return (
    <>
      <aside className={styles.aside}>
        <img
          id="asideImg"
          className="mainContent--aside-img"
          src="../../../../homeLayout/asideImg.svg"
          alt="Imagem do Aside"
        />
        <div id="textElements" className={styles.asideCaption}>
          <h2>Nenhuma mensagem encontrada</h2>
          <p>
            Digite um texto que você deseja criptografar ou descriptografar.
          </p>
        </div>
      </aside>
    </>
  );
};

export default AsideContent;

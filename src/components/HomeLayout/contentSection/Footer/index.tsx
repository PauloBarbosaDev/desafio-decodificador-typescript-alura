import BtnGeneric from '../../../Common/BtnGeneric';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.caption}>
          <img
            src="../../../../homeLayout/bi_exclamation-circle-fill.svg"
            alt=""
          />
          <p id="msgResult">Apenas letras minúsculas e sem acento.</p>
        </div>
        <div className={styles.buttons}>
          <BtnGeneric customClass="activedButton" content="Encryptar" />
          <BtnGeneric content="Decryptar" />
        </div>
      </section>
    </>
  );
};

export default Footer;

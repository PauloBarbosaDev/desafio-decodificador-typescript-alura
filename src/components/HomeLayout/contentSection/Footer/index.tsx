import BtnGeneric from '../../../Common/BtnGeneric';
import styles from './styles.module.scss';

interface props {
  encryptOnClick?: () => void;
  decryptOnClick?: () => void;
  resultMessage: string;
}

const Footer = ({ encryptOnClick, decryptOnClick, resultMessage }: props) => {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.caption}>
          <img
            src="../../../../homeLayout/bi_exclamation-circle-fill.svg"
            alt=""
          />
          <p id="msgResult">{resultMessage}</p>
        </div>
        <div className={styles.buttons}>
          <BtnGeneric
            customClass="activedButton"
            content="Encryptar"
            onClick={encryptOnClick}
            id=""
            name=""
          />
          <BtnGeneric
            content="Decryptar"
            onClick={decryptOnClick}
            id=""
            name=""
          />
        </div>
      </section>
    </>
  );
};

export default Footer;

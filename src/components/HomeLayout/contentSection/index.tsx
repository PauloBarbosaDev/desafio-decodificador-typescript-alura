import TextAreaGeneric from '../../Common/TextAreaGeneric';
import Footer from './Footer';
import styles from './styles.module.scss';

const ContentSection = () => {
  return (
    <>
      <section className={styles.content}>
        <TextAreaGeneric />
        <Footer />
      </section>
    </>
  );
};

export default ContentSection;

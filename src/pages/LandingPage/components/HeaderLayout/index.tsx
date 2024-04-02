import styles from './styles.module.scss';

const HeaderLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.headerLogo}
          src="../../../../homeLayout/logo.svg"
          alt="logo"
        />
      </header>
    </>
  );
};

export default HeaderLayout;

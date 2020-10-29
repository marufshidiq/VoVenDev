import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src="logo-ugm.svg" alt="Logo UGM" />
        <div className={styles.logoText}>Vocational Ventilator Development</div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.logoImg} src="logo-ugm.svg" alt="Logo UGM" />
      <div className={styles.logoText}>Vocational Ventilator Development</div>
    </div>
  );
}

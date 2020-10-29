import React from "react";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  const version = "v0.2.1";
  return (
    <div className={styles.footer}>
      <div className={styles.textLeft}>&copy; 2020 - {version}</div>
    </div>
  );
}

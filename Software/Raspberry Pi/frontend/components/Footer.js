import React from "react";
import styles from "../styles/Footer.module.scss";
import Battery from "./Battery";
import Network from "./Network";

export default function Footer() {
  const version = "v0.2.1";
  return (
    <div className={styles.footer}>
      <div className={styles.textLeft}>&copy; 2020 - {version}</div>
      <div className={styles.batteryPosition}>
        <Battery />
      </div>
      <div className={styles.networkPosition}>
        <Network />
      </div>
    </div>
  );
}

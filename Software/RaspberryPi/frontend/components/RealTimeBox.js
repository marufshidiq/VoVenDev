import React from "react";
import styles from "../styles/RealTimeBox.module.scss";

export default function RealTimeBox(props) {
  const { title, data, unit } = props;
  const color = styles.blue;
  return (
    <div className={styles.rtb} style={{ background: color }}>
      <span className={styles.title}>{title}</span>
      <span className={styles.data}>{data}</span>
      <span className={styles.unit}>{unit}</span>
    </div>
  );
}

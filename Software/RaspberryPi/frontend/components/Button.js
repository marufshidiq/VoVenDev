import React from "react";
import styles from "../styles/Button.module.scss";

export default function Button(props) {
  const text = props.text;
  const Icon = props.icon;
  return (
    <div className={styles.button}>
      {props.icon && <Icon />}{" "}
      {props.text && <span className={styles.text}>{text}</span>}
    </div>
  );
}

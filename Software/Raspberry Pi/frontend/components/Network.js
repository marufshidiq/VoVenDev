import React from "react";
import styles from "../styles/Network.module.scss";

export default function Network() {
  const ssid = "UGM-Hotspot";
  const color = styles.white;
  return (
    <div className={styles.network}>
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="9" width="3" height="7" fill={color} />
        <rect x="15" width="3" height="16" fill={color} />
        <rect x="5" y="6" width="3" height="10" fill={color} />
        <rect x="10" y="3" width="3" height="13" fill={color} />
      </svg>
      {ssid}
    </div>
  );
}

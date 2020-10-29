import React from "react";
import styles from "../styles/Battery.module.scss";

export default function Battery() {
  let battery = 90;
  if (battery < 0) {
    battery = 0;
  } else if (battery > 100) {
    battery = 100;
  }
  const bar = battery / (100 / 7);

  const color = styles.white;
  return (
    <div className={styles.battery}>
      <svg
        width="35"
        height="16"
        viewBox="0 0 35 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="30.5714"
          height="14"
          rx="3"
          stroke={color}
          strokeWidth="2"
        />
        {bar >= 1 && (
          <path
            d="M3.96094 5C3.96094 4.46076 4.38775 4.02121 4.92198 4.00075V11.9993C4.38775 11.9788 3.96094 11.5392 3.96094 11V5Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 2 && (
          <path
            d="M7.90918 4H8.87022V12H7.90918V4Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 3 && (
          <path
            d="M11.8572 4H12.8182V12H11.8572V4Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 4 && (
          <path
            d="M15.8052 4H16.7662V12H15.8052V4Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 5 && (
          <path
            d="M19.7532 4H20.7142V12H19.7532V4Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 6 && (
          <path
            d="M23.7014 4H24.6625V12H23.7014V4Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        {bar >= 7 && (
          <path
            d="M28.6104 5C28.6104 4.46076 28.1835 4.02121 27.6493 4.00075V11.9993C28.1835 11.9788 28.6104 11.5392 28.6104 11V5Z"
            stroke={color}
            strokeWidth="1.48052"
          />
        )}
        <path
          d="M32.5715 5H33.5456C34.0978 5 34.5456 5.44772 34.5456 6V10C34.5456 10.5523 34.0978 11 33.5456 11H32.5715V5Z"
          fill={color}
        />
      </svg>
      {battery}%
    </div>
  );
}

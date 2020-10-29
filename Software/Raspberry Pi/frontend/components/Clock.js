import React, { useEffect, useState } from "react";
import styles from "../styles/Clock.module.scss";

export default function Clock() {
  const [time, setTime] = useState("--:--");
  const [check, setCheck] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      setTime(now.getHours() + ":" + now.getMinutes());
      setCheck(check + 1);
    }, 1000);
    return () => clearInterval(id);
  }, [check]);

  const color = styles.white;
  return (
    <div className={styles.clock}>
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.5" cy="8.5" r="7.5" stroke={color} strokeWidth="2" />
        <line
          x1="8.15796"
          y1="3.57895"
          x2="8.15796"
          y2="9.84211"
          stroke={color}
          strokeWidth="2"
        />
        <line
          x1="7.15796"
          y1="8.8421"
          x2="13.4211"
          y2="8.8421"
          stroke={color}
          strokeWidth="2"
        />
      </svg>
      {time}
    </div>
  );
}

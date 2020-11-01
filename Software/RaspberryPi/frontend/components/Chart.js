import React from "react";
import styles from "../styles/variables.scss";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function Chart(props) {
  const { height, width, data, dataKey, name, unit } = props;
  const title = `${name} (${unit})`;

  return (
    <div
      style={{
        height: height,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {title}
      <ResponsiveContainer width={width} height="85%">
        <AreaChart data={data}>
          <XAxis dataKey="number" />
          <YAxis />
          <Area
            animationEasing="linear"
            animationDuration={0}
            type="monotone"
            dataKey={dataKey}
            stroke={styles.primary_white}
            fill={styles.primary_blue}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

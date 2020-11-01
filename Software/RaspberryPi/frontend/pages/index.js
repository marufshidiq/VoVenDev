import { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RealTimeBox from "../components/RealTimeBox";
import Button from "../components/Button";
import Chart from "../components/Chart";
import MaleIcon from "../assets/Icons/MaleIcon";
import FemaleIcon from "../assets/Icons/FemaleIcon";
import HeightIcon from "../assets/Icons/HeightIcon";
import WeightIcon from "../assets/Icons/WeightIcon";
import StartIcon from "../assets/Icons/StartIcon";
import StopIcon from "../assets/Icons/StopIcon";
import SetupIcon from "../assets/Icons/SetupIcon";
import DataIcon from "../assets/Icons/DataIcon";

export default function Home() {
  const [check, setCheck] = useState(0);
  const [data, setData] = useState([
    {
      p: 25,
      f: 60,
      v: 500,
    },
  ]);
  useEffect(() => {
    const id = setInterval(() => {
      const p = Math.floor(Math.random() * 60);
      const f = Math.floor(Math.random() * 150) - 75;
      const v = Math.floor(Math.random() * 800);
      const newData = data.concat({ p, f, v });
      if (newData.length > 50) {
        newData.shift();
      }
      setData(newData);
      setCheck(check + 1);
    }, 100);
    return () => clearInterval(id);
  }, [check]);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.data_container}>
          <div className={styles.chart_container}>
            <Chart
              height={100 / 3 + "%"}
              width="100%"
              data={data}
              dataKey="p"
              name="Pressure"
              unit="mmHg"
            />
            <Chart
              height={100 / 3 + "%"}
              width="100%"
              data={data}
              dataKey="f"
              name="Flow Rate"
              unit="SLPM"
            />
            <Chart
              height={100 / 3 + "%"}
              width="100%"
              data={data}
              dataKey="v"
              name="Volume"
              unit="ml"
            />
          </div>
          <div className={styles.data_section}>
            <div className={styles.personalize_button}>
              <Button icon={MaleIcon} />
              <Button icon={HeightIcon} text={"168 CM"} />
              <Button icon={WeightIcon} text={"65 KG"} />
            </div>
            <div className={styles.realtime}>
              <RealTimeBox title={"PRESSURE"} data={45} unit={"mmHg"} />
              <RealTimeBox title={"FLOW RATE"} data={100} unit={"SLPM"} />
              <RealTimeBox title={"VOLUME"} data={500} unit={"ml"} />
              <RealTimeBox title={"OXYGEN"} data={22} unit={"%"} />
            </div>
          </div>
        </div>
        <div className={styles.control_container}>
          <Button icon={StartIcon} text={"START"} />
          <Button icon={SetupIcon} text={"SETUP"} />
          <Button icon={DataIcon} text={"DATA"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

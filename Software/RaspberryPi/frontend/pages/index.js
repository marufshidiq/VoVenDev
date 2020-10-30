import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RealTimeBox from "../components/RealTimeBox";
import Button from "../components/Button";
import MaleIcon from "../assets/Icons/MaleIcon";
import FemaleIcon from "../assets/Icons/FemaleIcon";
import HeightIcon from "../assets/Icons/HeightIcon";
import WeightIcon from "../assets/Icons/WeightIcon";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
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
      <Footer />
    </div>
  );
}

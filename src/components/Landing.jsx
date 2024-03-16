import classes from "./Landing.module.css";
import arrow from '../assets/arrow.svg'

export default function Landing() {
  return (
    <div className={classes.landing}>
      <div className={classes.bg}></div>
      <h1 className={classes["intro-text"]}>أوقاف واربطة النظام حيدر آباد</h1>
      <a href="#about" className={classes.arrow}>
        <img src={arrow} alt="IMAGE" className="w-100" />
      </a>
    </div>
  );
}

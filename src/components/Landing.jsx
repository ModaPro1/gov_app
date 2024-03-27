import classes from "./Landing.module.css";
import arrow from "../assets/arrow.svg";
import video from "../assets/bg-video-short.mp4";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useRef } from "react";
import { langContext } from "../store/LangContext.jsx";

export default function Landing() {
  const videoEl = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    videoEl.current.play();
  }, []);

  const ctx = useContext(langContext);
  function changeAppLanguage(e) {
    e.preventDefault();
    ctx.changeLang()
  }
  return (
    <>
      <div className="banner p-2">
        <div className="container">
          <a href="" onClick={changeAppLanguage}>{ctx.lang === "en" ? "عربي" : "English"}</a>
        </div>
      </div>
      <div className={classes.landing}>
        <video
          className={classes.video}
          type="video/mp4"
          playsInline
          autoPlay={true}
          muted
          loop
          ref={videoEl}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <h1
          className={classes["intro-text"]}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {t("welcome")}
        </h1>
        <a href="#about" className={classes.arrow}>
          <img src={arrow} alt="IMAGE" className="w-100" />
        </a>
      </div>
    </>
  );
}

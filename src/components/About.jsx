import { useTranslation } from "react-i18next";
import image from "../assets/logo.png";
import MainTitle from "./MainTitle";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about" id="about">
      <div className="section-data py-4">
        <MainTitle classes="mt-3">{t("about_section_title")}</MainTitle>
        <div className="container">
          <div className="d-flex mt-3 content">
            <div className="image" data-aos="fade-left">
              <img src={image} width={100} alt="IMAGE" />
            </div>
            <div className="info pt-3" data-aos="fade-right">
              <p className="text-muted mb-0">{t("about_content")}</p>
            </div>
          </div>
          <div className="video mt-3">
            <iframe
              src="//www.youtube.com/embed/zWzSfr2FVA4?&amp;rel=0&amp;showinfo=0&amp;autoplay=false&amp;mute=false&amp;loop=false&amp;controls=1"
              frameborder="0"
              false=""
              allow="autoplay; encrypted-media"
              allowfullscreen=""
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

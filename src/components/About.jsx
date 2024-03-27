import { useTranslation } from "react-i18next";
import image from "../assets/logo.png";
import MainTitle from "./MainTitle";

export default function About() {
  const {t} = useTranslation()

  return (
    <div className="about" id="about">
      <div className="section-data py-4">
        <MainTitle classes="mt-3">{t('about_section_title')}</MainTitle>
        <div className="container">
          <div className="d-flex mt-3 content">
            <div className="image" data-aos="fade-left">
              <img src={image} width={100} alt="IMAGE" />
            </div>
            <div className="info pt-3" data-aos="fade-right">
              <p className="text-muted mb-0">{t('about_content')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

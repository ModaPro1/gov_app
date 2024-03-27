import { useTranslation } from "react-i18next";
import image1 from "../assets/services/1.png";
import image2 from "../assets/services/2.png";
import image3 from "../assets/services/3.png";
import image4 from "../assets/services/4.png";
import MainTitle from "./MainTitle";

export default function Services() {
  const {t} = useTranslation()

  return (
    <div className="services py-4" id="services">
      <div className="content">
        <div className="container">
          <MainTitle classes="mt-3 border-gray">{t('nav_4')}</MainTitle>
          <div className="boxes mt-5 row g-3">
          <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="500" data-aos-offset="-10">
                <img src={image4} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">{t('serv_1_title')}</h4>
                <p className="mb-0 text-muted font-semibold">
                  {t('serv_1_content')}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="700" data-aos-offset="-10">
                <img src={image1} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">{t('serv_2_title')}</h4>
                <p className="mb-0 text-muted font-semibold">
                {t('serv_2_content')}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="900" data-aos-offset="-10">
                <img src={image3} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">{t('serv_3_title')}</h4>
                <p className="mb-0 text-muted font-semibold">
                {t('serv_3_content')}
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="box shadow p-4 rounded-3 bg-white text-center h-100" data-aos="fade-up" data-aos-duration="1100" data-aos-offset="-10">
                <img src={image2} alt="IMAGE" width={90} />
                <h4 className="mt-3 fw-semibold">{t('serv_4_title')}</h4>
                <p className="mb-0 text-muted font-semibold">
                {t('serv_4_content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

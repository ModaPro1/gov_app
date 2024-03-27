import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {

  const {t} = useTranslation()

  return (
    <footer className="pt-5 pb-3 footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <img src={logo} width="70" alt="Footer Image" className="rounded-1" />
            <p className="mt-2 mb-0 text-white-50">
              {t('footer_msg')}
            </p>
          </div>
          <div className="col-lg-4">
            <h3>{t('footer_title_2')}</h3>
            <div className="links">
              <a href="#">
                <i className="fa-solid fa-angles-left"></i>
                {t('nav_1')}
              </a>
              <a href="#about">
                <i className="fa-solid fa-angles-left"></i>
                {t('nav_2')}
              </a>
              <Link to="/goals">
                <i className="fa-solid fa-angles-left"></i>
                {t('nav_3')}
              </Link>
              <a href="#services">
                <i className="fa-solid fa-angles-left"></i>
                {t('nav_4')}
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <h3>{t('footer_title_1')}</h3>
            <div className="info">
              <span className="d-block mb-1">
                <i className="fa-solid fa-envelope"></i> admin@hrubath.org
              </span>
              <span className="d-block">
                <i className="fa-solid fa-location-dot"></i> {t('footer_contact')}
              </span>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center m-0">
        {t('footer_copyright')}
        </p>
        {/* <p className="text-center m-0 cp text-white-50">
        تصميم وتطوير بواسطة <a href="https://wa.me/+201020069196" target="_blank">محمود أحمد</a>
      </p> */}
      </div>
    </footer>
  );
}

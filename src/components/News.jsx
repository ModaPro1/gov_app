import { useTranslation } from "react-i18next";
import MainTitle from "./MainTitle";

export default function News() {
  const {t} = useTranslation()

  return (
    <div className='news py-4'>
      <MainTitle classes="border-gray">{t('news_section_title')}</MainTitle>
      <div className="container">
        <div className="box mt-5 d-flex gap-5 position-relative">
          <div className="position-relative">
            <div className="controls d-flex gap-3">
              <i className="fa-solid fa-arrow-right disabled"></i>
              <i className="fa-solid fa-arrow-left disabled"></i>
            </div>
            <p className="mt-5">
              {t('news_1')}
            </p>
          </div>
          <img
            src="/news/1.jpeg"
            alt="News"
            width={400}
            className="rounded-2"
          />
        </div>
      </div>
    </div>
  );
}

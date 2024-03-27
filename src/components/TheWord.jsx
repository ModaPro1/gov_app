import { useTranslation } from "react-i18next";
import MainTitle from "./MainTitle";
import Swal from "sweetalert2";
import { useContext } from "react";
import { langContext } from "../store/LangContext";

export default function TheWord() {
  const {t} = useTranslation()

  const originalValue = t('the_word_content')
  const lang = useContext(langContext)

  function handleClick(e) {
    e.preventDefault()

    Swal.fire({
      title: t('word_section_title'),
      text: originalValue,
      confirmButtonColor: "#131841",
      confirmButtonText: lang.lang == 'en' ? 'Close' : "اغلاق"
    })
  }

  return (
    <div className="word-section py-4 border-top">
      <MainTitle>{t('word_section_title')}</MainTitle>
      <div className="container">
        <div className="mt-3 d-flex justify-content-between gap-2 gap-lg-5 content">
          <img src="/leaders/1.jpeg" alt="Leader" width={250} className="rounded-3 shadow-lg" />
          <div className="text">
            <p className="mb-0 text-muted pt-2">
              {originalValue.slice(0, 1050)}...
              <a className="ms-1 text-decoration-none" href="#" onClick={handleClick}>
                {lang.lang == 'en' ? "Show more" : 'عرض المزيد'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
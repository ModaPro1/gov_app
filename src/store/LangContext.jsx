import { createContext, useState } from "react";

export const langContext = createContext({
  lang: "",
  changeLang: () => {}
})

export function LangCtxProvider({children}) {
  const [lang, setLang] = useState(localStorage.getItem("i18nextLng") || "en")

  function changeLang() {
    if(lang == 'en') {
      localStorage.setItem("i18nextLng", 'ar-SA')
    } else {
      localStorage.setItem("i18nextLng", 'en')
    }
    window.location.reload()
  }

  const ctxValue = {
    lang: lang,
    changeLang: changeLang
  }

  return <langContext.Provider value={ctxValue}>{children}</langContext.Provider>
}
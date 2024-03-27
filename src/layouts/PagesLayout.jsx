import { useContext } from "react";
import NavbarAlt from "../components/NavbarAlt";
import { langContext } from "../store/LangContext";

export default function PagesLayout({ title, pageClass, children }) {
  const { lang } = useContext(langContext);

  return (
    <div className={lang}>
      <NavbarAlt />
      <div className={`${pageClass} page`}>
        <div className="bg"></div>
        <div className="content pt-5 pb-3">
          <div className="container">
            <h2 className="text-white mb-5">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

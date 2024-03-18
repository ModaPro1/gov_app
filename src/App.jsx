import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Gallary from "./pages/Gallary";
import NotFound from "./pages/NotFoud";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect, useState } from "react";
import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "bXlmtUZemRUeq9VZxfTWSA";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;


export default function App() {
  const [appLoaded, setAppLoaded] = useState(false)
  useEffect(() => {
    Aos.init();
    i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "ar-SA",

      ns: ["default"],
      defaultNS: "default",

      supportedLngs: ["ar-SA", "en"],
      
      backend: {
        loadPath: loadPath
      }
    })
    .then(() => {
      setAppLoaded(true)
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/goals', element: <Goals /> },
        { path: '/gallary', element: <Gallary /> },
      ]
    },
  ]);

  return appLoaded && <RouterProvider router={router} />
}
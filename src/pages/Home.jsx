import About from "../components/About";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import Partners from "../components/Partners";
import TheWord from "../components/TheWord";
import News from "../components/News";
import { useContext } from "react";
import { langContext } from "../store/LangContext";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavbarAlt from "../components/NavbarAlt";

export default function Home() {
  const { lang } = useContext(langContext);
  const router = useLocation()

  return (
    <div className={lang}>
      {router.pathname == "/" ? <Navbar /> : <NavbarAlt />}
      <Landing />
      <About />
      <TheWord />
      <Services />
      <Partners />
      <Numbers />
      <News />
      <Footer />
    </div>
  );
}

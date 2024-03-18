import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Numbers from "../components/Numbers";
import Services from "../components/Services";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    let lang = localStorage.getItem("lang")
    if(!lang || lang == 'ar-SA') {
      navigate('/?lng=ar-SA')
    }
  }, [])

  return (
    <>
      <Landing />
      <About />
      <Services />
      <Numbers />
      <Contact />
      <Footer />
    </>
  )
}
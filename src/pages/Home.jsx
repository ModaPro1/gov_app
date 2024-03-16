import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import Numbers from "../components/Numbers";
import Services from "../components/Services";

export default function Home() {
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
import Landing from "../components/Landing";
import About from "../components/About";
import Status from "../components/Status";
import Deoms from "../components/Deoms";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <>
      <Landing />
      <About />
      <Status />
      <div className="divider"></div>
      <Deoms />
      <Testimonials />
      <Pricing />
      <Faq />
      <GetStarted />
      <div className="divider"></div>
      <Footer />
    </>
  );
}

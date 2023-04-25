import NavDesktop from "../component/coman/navDesktop";
import Navmobile from "../component/coman/navMobile";
import { useState } from "react";
import Productcarocell from "../component/home/productCarocell";
import Servicess from "../component/home/servicess";
import Testimonials from "../component/home/testimonials";
import TechnologyWork from "../component/home/technologyWork";
import FooterDesktop from "../component/coman/footerDesktop";
import ScroolOffer from "../component/home/scroolOffer";
import Programme from "../component/home/programme";

const Home = () => {
  const [nav, setNav] = useState(false);
  const smMenuToggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <NavDesktop smMenuToggle={smMenuToggle} />
      <Navmobile smMenuToggle={smMenuToggle} nav={nav} />
      <Productcarocell />
      <ScroolOffer />
      <Programme />
      <Servicess />
      <Testimonials />
      <TechnologyWork />
      <FooterDesktop />
    </>
  );
};

export default Home;

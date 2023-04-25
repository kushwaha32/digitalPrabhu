import { useState } from "react";
import FooterDesktop from "../component/coman/footerDesktop";
import NavDesktop from "../component/coman/navDesktop";
import Navmobile from "../component/coman/navMobile";
import Heading from "../component/heading/heading";
import InnerBanner from "../component/innerBanner/innerBanner";
import "../assets/aboutus.css";

const AboutUs = () => {
  const [nav, setNav] = useState(false);
  const smMenuToggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <NavDesktop smMenuToggle={smMenuToggle} />
      <Navmobile smMenuToggle={smMenuToggle} nav={nav} />
      <InnerBanner title="About Us" />
      <section className="container">
        <Heading title="Our Specialization" />
        <div className="specialization">
          <div className="sp_text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque at
            aspernatur nesciunt veniam blanditiis, distinctio cum culpa voluptas
            aliquam officiis. Dolores pariatur laboriosam odit veritatis
            repudiandae labore corporis totam amet magni! Vitae quis, unde nihil
            dolorem nesciunt quod soluta nulla.
          </div>
          <div className="pro_graph">
            <div className="prog_text">
              <div className="prog_text_right">HTML</div>
              <div className="prog_text_left">100%</div>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop />
    </>
  );
};

export default AboutUs;

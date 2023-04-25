import { useState } from "react";
import FooterDesktop from "../component/coman/footerDesktop";
import NavDesktop from "../component/coman/navDesktop";
import Navmobile from "../component/coman/navMobile";
import Heading from "../component/heading/heading";
import InnerBanner from "../component/innerBanner/innerBanner";
import "../assets/contact.css";
import ContactInfo from "../component/contactinfo/contactInfo";
import india from "../img/india.png";
import Button from "../component/coman/button";

const ContactUs = () => {
  const [nav, setNav] = useState(false);
  const smMenuToggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <NavDesktop smMenuToggle={smMenuToggle} />
      <Navmobile smMenuToggle={smMenuToggle} nav={nav} />
      <InnerBanner title="Contact Us" />
      <section className="container">
        <Heading title="Get in Touch with us" />
        <div className="get_touch_box">
          <div className="contact_info">
            <ContactInfo
              icon="fa fa-map-marker"
              heading="Office Address"
              text="150 A/4 Chak meerapatti dhoomanganj Allahabad"
              styleFont={{ fontSize: "20px" }}
            />
            <ContactInfo
              icon="fa fa-mobile-phone"
              heading="Phone NO"
              text="+91-8355024935"
              styleFont={{ fontSize: "20px" }}
            />
            <ContactInfo
              icon="fa fa-envelope"
              heading="E-mail"
              text="raj639kushwaha@gmail.com"
              styleFont={{ fontSize: "13px" }}
            />
          </div>
          <div className="contact_form">
            <form action="/action_page.php">
              <div className="form-group">
                <label for="name">Name :</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  id="name"
                />
              </div>
              <div className="form-group mt-4">
                <label for="email">Email :</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  id="email"
                />
              </div>
              <div className="form-group mt-4">
                <label for="email">Email :</label>
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <img src={india} alt="" />
                      +92
                    </span>
                  </div>
                  <input type="text" class="form-control" />
                </div>
              </div>
            <Button />
            </form>
          </div>
        </div>
      </section>
      <FooterDesktop />
    </>
  );
};

export default ContactUs;

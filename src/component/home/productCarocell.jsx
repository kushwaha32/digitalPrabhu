import Carousel from "react-bootstrap/Carousel";
import "../../assets/slickCaro.css";

import Button from "../coman/button";
import RatatingAnimation from "./ratatingAnimation";


const Productcarocell = () => {
  // var settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   arrows: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   prev: false,
  //   next: false,
  // };
  return (
    <>
      <div className="slick_caro_cus">
            {/* mobile */}
            <RatatingAnimation type="mobile" />
            {/* content */}
            <div className="content container">
              <div className="content-text">
                <h1 className="content-left-h">
                  ASIA'S LEADING <br />
                  DIGITAL MARKETING INSTITUTE
                </h1>
                <p className="content-left-p">
                  The Digital Marketing Institute provides you an unparalleled
                  learning experience. Helps you to Gain an internationally
                  recognized digital marketing certification.
                  <br />
                  <br />
                  <span>
                    4 Branches | Internationally Recognized Certifications |
                    100% Placement Record | Google Certified
                  </span>
                </p>
                <Button text="Book Seminar" />
              </div>
              {/* desktop */}
              <RatatingAnimation type="desktop" />
            </div>
       
      </div>
    </>
  );
};

export default Productcarocell;

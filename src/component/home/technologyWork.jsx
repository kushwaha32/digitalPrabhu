import Heading from "../heading/heading";
import Slider from "react-slick";
import bootstrap from "../../img/bootstrap-logo.png";
import "../../assets/technologyWork.css";
import css from "../../img/css.png";
import express from "../../img/express-js.png";
import Logo from "../../img/Logo-Strips.png";

const TechnologyWork = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Heading title="Corporates Hiring Includes" />
      <Slider {...settings}>
        <div>
          <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
        <figure>
            <img src={Logo} alt="bootstrap-logo" />
            <figcaption>Logo Script</figcaption>
          </figure>
        </div>
        <div>
          
        </div>
      </Slider>
    </div>
  );
};

export default TechnologyWork;

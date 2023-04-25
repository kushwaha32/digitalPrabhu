import "../../assets/footer.css";

const FooterDesktop = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 footer-col">
            <h3 className="title">GET IN TOUCH</h3>
            <ul className="get_touch">
              <li>
                Contact No:<span> +91-8355024835</span>
              </li>
              <li>
                Email:<span> raj639kushwaha@gmail.com</span>
              </li>
              <li>
                Address:<span> 150A/4 Chak Meerapatti Allahabad</span>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12 footer-col">
            <h3 className="title">OUR SERVICESS</h3>
            <ul className="servicess">
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  Web Development
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  App Development
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  E-Commerce Development
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-angle-right"></i>
                  E-Commerce Development
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-lg-4 col-md-12 col-sm-12">
            <h3 className="title">OUR SOCIAL NETWORK</h3>
            <ul className="social_network">
              <li>
                <a href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copy_right">
          © Copyright 2022 - 2022. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterDesktop;

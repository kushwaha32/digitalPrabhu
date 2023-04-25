import { Container } from "react-bootstrap";
import "../../assets/navDesktop.css";
import { Link } from "react-router-dom";
import { navLink } from "./navLink";
import { useEffect, useState } from "react";

const NavDesktop = ({ smMenuToggle }) => {
  const [subnav, setSubnav] = useState(false);
  const MouseOver = (e) => {
    if (e.target.children[1]) {
      e.target.children[0].classList.toggle("rotate");
      e.target.children[1].classList.toggle("navigation_sub_active");
    }
  };

  const removeClass = (e) => {
    e.target.closest("ul").classList.remove("navigation_sub_active");
    e.target.closest("i").classList.remove("rotate");
  };

  useEffect(() => {}, []);
  return (
    <header>
      <div className="nav_top">
        <Container>
          <div className="nav_contact">
            <ul className="nav_social">
              <li>
                <i className="fa fa-facebook"></i>
              </li>
              <li>
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
              </li>
            </ul>
            <ul className="nav_contact">
              <li>+91-8355024835 </li>
              <span> | </span> <li> +91-8355024835</li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="border-color">
        <div className="nav_bottom container">
          <div className="nav_brand">brand</div>
          <nav>
            <div className="hamburger-icon">
              <i className="fa fa-bars" onClick={smMenuToggle}></i>
            </div>
            <ul className="navigation">
              {navLink.map((link, i) => {
                return (
                  <li key={i} className="navigation_link" onClick={MouseOver}>
                    {link.sublinks ? (
                      <>
                        {link.name}
                        <i className="fa fa-angle-down arrow"></i>
                        <ul className="navigation_sub">
                          {link.sublinks.map((sub, j) => {
                            return (
                              <>
                                <li
                                  key={j}
                                  className="navigation_sub_link"
                                  onClick={removeClass}
                                >
                                  <Link to={sub.link}>{sub.name}</Link>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <Link to={link.link}>{link.name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavDesktop;

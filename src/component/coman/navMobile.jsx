import { navLink } from "./navLink";
import { Link } from "react-router-dom";
import "../../assets/navMobile.css";

const Navmobile = ({ nav, smMenuToggle }) => {
  const menuToggle = (e) => {
    e.target.nextSibling.classList.toggle("height-toggle");

    e.target.children[0].classList.toggle("rotate_i");
  };

  return (
    <header className={`sm_nav ${nav ? "sm_nav_active" : ""}`}>
      <i class="fa fa-times sm_cross" onClick={smMenuToggle}></i>
      <div className="brand">brand</div>
      <nav>
        <ul className="nav-link-parent">
          {navLink.map((nav, key) => {
            return (
              <>
                <li key={key}>
                  {nav.sublinks ? (
                    <>
                      <span onClick={menuToggle}>
                        {nav.name} <i className="fa fa-angle-left"></i>
                      </span>
                      <ul className="nav-link-child">
                        {nav.sublinks.map((sub, keyId) => {
                          return (
                            <li key={keyId}>
                              <Link to="">
                                <span style={{ marginRight: "13px" }}>-</span>
                                {sub.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link to={nav.link}>{nav.name} </Link>
                  )}
                </li>
              </>
            );
          })}
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navmobile;

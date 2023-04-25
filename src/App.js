import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
import Services from "./pages/servicess";
import Preloader from "./component/coman/preloader";
import { useEffect, useState } from "react";


function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(false)
  })
  return (
    loading ? <Preloader /> :
    <>
      
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about-us" exact={true} element={<AboutUs />} />
        <Route path="/contact-us" exact={true} element={<ContactUs />} />
        <Route path="/services/html" exact={true} element={<Services />} />
      </Routes>
    </>
  );
}

export default App;

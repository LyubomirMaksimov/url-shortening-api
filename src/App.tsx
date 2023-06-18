import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Shorts from "./components/Shorts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import MobileMenuPopUp from "./components/MobileMenuPopUp";

function App() {
  const [openMenuModal, setOpenMenuModal] = useState(false);

  const menuHanlder = () => {
    setOpenMenuModal((prevState) => !prevState);
  };

  return (
    <div className="SiteWidth">
      <span className="white-background"></span>
      <div className="container">
        <NavBar menuHandler={menuHanlder} />
        <div className={` ${openMenuModal ? "showMenu" : "hideMenu"}`}>
          <MobileMenuPopUp />
        </div>
        <Hero />
        <Shorts />
        <Stats />
      </div>
      <Footer />
    </div>
  );
}

export default App;

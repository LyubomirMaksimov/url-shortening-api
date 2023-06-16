import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Shorts from "./components/Shorts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="SiteWidth">
      <span className="white-background"></span>
      <div className="container">
        <NavBar />
        <Hero />
        <Shorts />
        <Stats />
      </div>
      <Footer />
    </div>
  );
}

export default App;

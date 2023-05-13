import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Shorts from "./components/Shorts";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <span className="white-background"></span>
      <div className="container">
        <NavBar />
        <Hero />
        <Shorts />
        <Stats />
        <Footer />
      </div>
    </div>
  );
}

export default App;

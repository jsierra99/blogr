import React from "react";
import Home from "./components/Home";
import "./css/app.scss";
import About from "./components/About";
import State from "./components/State";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <About />
      <State />
      <Services />
      <Footer />
    </>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import About from "./components/about/about";
import JoinUs from "./components/join us/joinUs";
import Services from "./components/services/services";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <JoinUs />
      <Services />
    </>
  );
}

export default App;

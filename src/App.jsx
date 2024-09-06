/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/navbar/navbar";
import Main from "./components/main/main";
import About from "./components/about/about";
import JoinUs from "./components/join us/joinUs";
import Services from "./components/services/services";
import Universities from "./components/universities/universities";
import Adventages from "./components/adventages/adventages";
import Footer from "./components/footer/footer";
import Vlog from "./components/vlog/vlog";
import Partners from "./components/partners/partners";
import Comments from "./components/comments/comments";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <JoinUs />
      <Services />
      <Universities />
      <Adventages />
      <Vlog />
      <Partners />
      <Comments />
      <Footer />
    </>
  );
}

export default App;

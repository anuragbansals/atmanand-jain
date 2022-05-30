import React from "react";
import MiniAbout from "../About/MiniAbout";
import { Footer } from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Gallery />
      <MiniAbout />
      <Footer />
    </>
  );
};

export default Home;

import "./resources/styles.css";
import React from "react";
import Header from "./components/header_footer/header";
import Footer from "./components/header_footer/footer";
import Featured from "./components/featured";
import VenueNfo from "./components/venuenfo";
import Hightlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from "react-scroll";


const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>

      <Element name="venuenfo">
        <VenueNfo />
      </Element>
      <Element name="highlights">
        <Hightlights />
      </Element>

      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import BarWheater from "../components/BarWheater";
import Currently from "../components/Currently";
import DetailWheater from "../components/DetailWheater";
import FooterP from "../components/FooterP";
import MapP from "../components/MapP";
import NavbarP from "../components/NavbarP";
import SubNav from "../components/SubNav";
import WeatherWeekly from "../components/WeatherWeekly";

const Home = () => {
  return (
    <>
      <NavbarP />
      <SubNav />
      <DetailWheater />
      <Currently />
      <BarWheater />
      <MapP />
      <div style={{ textAlign: "center" }}>
        <h1>TEXTO RESUMEN</h1>
      </div>
      <WeatherWeekly />
      <div style={{ textAlign: "center" }}>
        <h5>Explore the weather in the past or future</h5>
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="date" />
      </div>
      <FooterP />
    </>
  );
};

export default Home;

import React from "react";
import MapP from "../components/MapP";
import SubNav from "../components/SubNav";
import WeatherWeekly from "../components/WeatherWeekly";


const Home = () => {
  return (
    <>
      <SubNav />
      <WeatherWeekly />
      <MapP />
    </>
  );
};

export default Home;

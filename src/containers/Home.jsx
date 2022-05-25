import React from "react";
// import BarWheater from "../components/BarWheater";
// import Currently from "../components/Currently";
// import DetailWheater from "../components/DetailWheater";
import FooterP from "../components/FooterP";
// import MapP from "../components/MapP";
// import NavbarP from "../components/NavbarP";
import SubNav from "../components/SubNav";
import WeatherWeekly from "../components/WeatherWeekly";
// import { getData } from "../services/getData";


const Home = () => {

  
  return (
    <>

      <SubNav />
      {/* <DetailWheater /> */}
      {/* <Currently />
      <BarWheater /> */}
      {/* {city.map(c =>(
        <h1>{c.name} </h1>
        ))}     */}



<WeatherWeekly />
      {/* <MapP />
      <div style={{ textAlign: "center" }}>
        <h1>TEXTO RESUMEN</h1>
      </div>
      
      <div style={{ textAlign: "center" }}>
        <h5>Explore the weather in the past or future</h5>
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="date" />
      </div> */}
      <FooterP />
    </>
  );
};

export default Home;

import React from "react";
import NavbarP from "../components/NavbarP";
import FooterP from "../components/FooterP";
import Section1App from "../components/Section1App";
import Section2App from "../components/Section2App";

const App = () => {
  return (
    <>
      <NavbarP />
        <Section1App/>
        <Section2App/>
      <FooterP />
    </>
  );
};

export default App;

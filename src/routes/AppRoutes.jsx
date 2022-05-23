import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../containers/App";
import Attribution from "../containers/Attribution";
import Blog from "../containers/Blog";
import Help from "../containers/Help";
import Home from "../containers/Home";
import TermsService from "../containers/TermsService";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<App />} />
        <Route path="/tos" element={<TermsService />} />
        <Route path="/attribution" element={<Attribution />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<Help />} />

      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;

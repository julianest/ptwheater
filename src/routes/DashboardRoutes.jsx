import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Help from '../containers/Help';
import Home from '../containers/Home';
import NavbarP from '../components/NavbarP';
import App from "../containers/App";
import Attribution from "../containers/Attribution";
import Blog from "../containers/Blog";
import TermsService from "../containers/TermsService";
import FooterP from "../components/FooterP";
import Profile from "../containers/Profile";

const DashboardRoutes = () => {
	return (
		<>
			<NavbarP />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/help" element={<Help />} />
        <Route path="/app" element={<App />} />
        <Route path="/tos" element={<TermsService />} />
        <Route path="/attribution" element={<Attribution />} />
        <Route path="/blog" element={<Blog />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
			<FooterP />
		</>
	);
};
export default DashboardRoutes;
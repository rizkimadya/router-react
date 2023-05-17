import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import NotFound from "../pages/NotFound";

const Router = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/detail/:id" element={<Detail />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</React.Fragment>
	);
};

export default Router;

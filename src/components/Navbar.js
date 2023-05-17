import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div style={nav}>
			<h1>KodeAkademia</h1>
			<ul style={ul}>
				<Link style={link} to="/">
					<li>Home</li>
				</Link>
				<Link style={link} to="/about">
					<li>About</li>
				</Link>
				<Link style={link} to="/contact">
					<li>Contact</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;

const nav = {
	display: "flex",
	background: "#fe024e",
	padding: "0px 6rem",
	justifyContent: "space-between",
	color: "#fff",
	alignItems: "center",
};

const ul = {
	listStyle: "none",
	display: "flex",
	justifyContent: "space-between",
	width: "20%",
};

const link = {
	color: "#fff",
	textDecoration: "none",
};

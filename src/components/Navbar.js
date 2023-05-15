import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<div style={nav}>
			<h1>KodeAkademia</h1>
			<ul style={ul}>
				<li style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
					Home
				</li>
				<li style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
					About
				</li>
				<li style={{ cursor: "pointer" }} onClick={() => navigate("/contact")}>
					Contact
				</li>
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

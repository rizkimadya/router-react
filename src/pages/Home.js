import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Js from "../images/js.png";
import Reactimg from "../images/react.png";
import Vue from "../images/vue.jpg";
import Svelte from "../images/svelte.png";

const Home = () => {
	const data = [
		{
			id: 1,
			name: "Javascript",
			description: "Deskripsi Javascript",
			image: Js,
		},
		{
			id: 2,
			name: "React",
			description: "Deskripsi React",
			image: Reactimg,
		},
		{
			id: 3,
			name: "Vue",
			description: "Deskripsi Vue",
			image: Vue,
		},
		{
			id: 4,
			name: "Svelte",
			description: "Deskripsi Svelte",
			image: Svelte,
		},
	];
	return (
		<>
			<Navbar />
			<h1 style={{ paddingLeft: "6rem" }}>Home Page</h1>
			<div style={container}>
				{data.map(item => (
					<div key={item.id} style={card}>
						<img src={item.image} width="100%" height="170px" />
						<h3>{item.name}</h3>
					</div>
				))}
			</div>
			<Footer />
		</>
	);
};

export default Home;

const container = {
	display: "flex",
	padding: "0px 6rem",
	justifyContent: "space-between",
};
const card = {
	width: "15%",
	height: "100%",
};

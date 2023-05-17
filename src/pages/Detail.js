import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Js from "../images/js.png";
import Reactimg from "../images/react.png";
import Vue from "../images/vue.jpg";
import Svelte from "../images/svelte.png";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
	const [selectedData, setSelectedData] = useState(null);

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

	const { id } = useParams();

	useEffect(() => {
		const selected = data.find(item => item.id === parseInt(id));
		setSelectedData(selected);
	}, [id]);

	return (
		<MainLayout>
			{selectedData && (
				<div style={container}>
					<h1>{selectedData.name}</h1>
					<div style={box}>
						<img style={img} src={selectedData.image} alt={selectedData.name} />
						<div>
							<h2>{selectedData.description}</h2>
							<Link to="/">Kembali</Link>
						</div>
					</div>
				</div>
			)}
		</MainLayout>
	);
};

export default Detail;

const container = {
	padding: "0px 6rem",
};
const img = {
	width: "15rem",
	height: "20rem",
	marginRight: "2rem",
};
const box = {
	display: "flex",
};

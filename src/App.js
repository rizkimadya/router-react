import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
	);
};

export default App;

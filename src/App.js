import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./components/Home.jsx";
import { Characteres } from "./components/Characteres.jsx";


const App = () => {
	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/characters" element={<Characteres />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Recleaner from "./pages/Recleaner/Recleaner.jsx";
import Home from "./pages/Home/Home.jsx";
import './scss/style.css';

const App = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recleaner" element={<Recleaner />} />
				</Routes>
			</Router>
	);
};

export default App;

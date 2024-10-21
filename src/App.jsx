import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import Recleaner from "./pages/Recleaner/Recleaner.jsx";
import './scss/style.css'

const App = () => {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path={'/recleaner'} element={<Recleaner/>}></Route>
				</Routes>
			</Router>
	);
};

export default App;
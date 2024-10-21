import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home/Home.jsx";
import './scss/style.css'
import Recleaner from "./pages/Recleaner/Recleaner.jsx";


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
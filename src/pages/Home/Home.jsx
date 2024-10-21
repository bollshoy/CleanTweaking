import React from 'react';
import Audience from "../../components/Audience.jsx";
import Header from "../../components/Header.jsx";
import About from "../../components/About.jsx";
import Hero from "../../components/Hero.jsx";
import Tab from "../../components/Tab.jsx";
import Test from "../../components/Test.jsx";
import SoftWare from "../../components/SoftWare.jsx";
import Footer from "../../components/Footer.jsx";

const Home = () => {
	return (
			<>
				<Header/>
				<main>
					<Hero/>
					<About/>
					<Tab/>
					<Audience/>
					<Test/>
					<SoftWare/>
				</main>
				<Footer/>
			</>
	);
};

export default Home;
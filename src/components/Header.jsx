import React from 'react';
import Navbar from "./Navbar.jsx";
import './_Header.scss'

const Header = () => {
	return (
			<header className="header">
				<div className="header__container container">
					<div className="header__logo">
						<a href="#" className="logo">CleanTweaking</a>
					</div>
					<Navbar/>
				</div>
			</header>
	);
};

export default Header;
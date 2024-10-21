import React, {useCallback, useState} from 'react';
import {NavLink} from "react-router-dom";
import './_Navbar.scss';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = useCallback(() => {
		window.scrollBy({
			top: 2200,
			behavior: 'smooth',
		});
	})

	const handleContactClick = useCallback(() => {
		window.scrollBy({
			top: 8000,
			behavior: 'smooth',
		});
	})

	const handleBurgerClick = useCallback(() => {
		setOpen(!open);
	})

	return (
			<nav className="header__menu">
				<div className={`burger ${open ? 'open' : ''}`} onClick={handleBurgerClick}>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<ul className={`header__list ${open ? 'open' : ''}`}>
					<li><NavLink to={'/'} className={'header__link'}>Главная</NavLink></li>
					<li><NavLink to={''} onClick={handleClick} className={'header__link'}>Оптимизация</NavLink></li>
					<li><NavLink to={'/recleaner'} className={'header__link'}>Recleaner</NavLink></li>
					<li><NavLink to={''} onClick={handleContactClick} className={'header__link'}>Контакты</NavLink></li>
				</ul>
			</nav>
	);
};

export default Navbar;

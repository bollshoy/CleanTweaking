import React, { useRef, useEffect, useCallback } from 'react';
import Computers from "./Computers.jsx";
import { gsap } from "gsap";
import './_Hero.scss';

const Hero = () => {
	const heroRef = useRef(null);

	const handleClick = useCallback(() => {
		window.scrollBy({
			top: 1300,
			behavior: 'smooth',
		});
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(".hero__title", { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5 });
			gsap.fromTo(".hero__text", { opacity: 0, x: -250 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.3 });
			gsap.fromTo(".computers-container", { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.6 });
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
			<section className="hero" ref={heroRef}>
				<div className="hero__container container">
					<div className="hero__content">
						<div className="hero__content-text">
							<div className="line-container">
								<div className="circle"></div>
								<div className="line"></div>
							</div>
							<h1 className="hero__title">
								Лучшая оптимизация<br/> для вашего ПК
							</h1>
						</div>
						<p className="hero__text">
							Ускорьте работу вашего компьютера: советы <br/>
							и инструменты для максимальной производительности.
						</p>
					</div>
					<div className="computers-container">
						<Computers/>
					</div>
				</div>
			</section>
	);
};

export default Hero;
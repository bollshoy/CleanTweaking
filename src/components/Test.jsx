import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import googleDrive from '../assets/googleDrive.svg';
import { TestData } from "../../Data/TestData.js";
import './_Test.scss';

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const section = sectionRef.current;

		gsap.fromTo(section.querySelectorAll('.test__item'),
				{ opacity: 0, y: 50 },
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.2,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: section,
						start: 'top 80%', // Начало анимации, когда элемент на 80% в видимой области
						once: true, // Анимация проигрывается один раз
					},
				}
		);
	}, []);

	return (
			<section className="test" ref={sectionRef}>
				<div className="test__container container">
					<div className="test__text">
						<h4 className="test__title">
							Тесты FPS в играх после Ultimate оптимизации в сравнении с обычной настройкой
						</h4>
						<p className="test__text">В игре Counter-Strike 2</p>
					</div>
					<div className="test__content">
						{TestData.map((item, index) => (
								<div className="test__item" key={index}>
									<span className="test__item-title">{item.title}</span>
									<img src={item.src} alt={item.alt} className="test__img"/>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Test;

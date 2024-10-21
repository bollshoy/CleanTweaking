import React, { useEffect, useRef, useState } from 'react';
import test1 from '../assets/test1.svg';
import test2 from '../assets/test2.svg';
import test3 from '../assets/test3.svg';
import { gsap } from 'gsap';
import './_Test.scss';

const testImages = [test1, test2, test3];
const optimizationLabels = [
	{ title: 'Ultimate оптимизация', fps: 'FPS' },
	{ title: 'Базовая оптимизация', fps: 'FPS' },
	{ title: 'Без оптимизации', fps: 'FPS' },
];

const Test = () => {
	const imagesRef = useRef([]);
	const sectionRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false); // Состояние для отслеживания анимации

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					imagesRef.current.forEach((img, index) => {
						gsap.fromTo(img, { opacity: 0 }, { opacity: 1, duration: 0.5, delay: index * 0.2 });
					});
					setHasAnimated(true); // Установить, что анимация выполнена
					observer.unobserve(entry.target); // Остановить наблюдение после анимации
				}
			});
		});

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, [hasAnimated]); // Добавить hasAnimated в зависимости

	return (
			<section className="test" ref={sectionRef}>
				<div className="test__container container">
					<div className="test__text">
						<h4 className="test__title">
							Тесты системы без оптимизации, базовая оптимизация, Ultimate оптимизация
						</h4>
						<p className="test__text">В игре Counter-Strike 2</p>
						<div className="test__circle">
							{optimizationLabels.map((item, index) => (
									<div className="test__circle-item" key={index}>
								<span className="circle__title">
									<span>{item.fps}</span> {item.title}
								</span>
										<div className="circle__item"></div>
									</div>
							))}
						</div>
					</div>
					<div className="test__content">
						{testImages.map((image, index) => (
								<div className="test__item" key={index}>
									<img
											src={image}
											alt=""
											className="test__img"
											ref={el => imagesRef.current[index] = el}
									/>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Test;

import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import softwareData from "../../Data/SoftwareData.js";
import { gsap } from 'gsap';
import './_SoftWare.scss';

const SoftWare = () => {
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const swiperRef = useRef(null);
	const sectionRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !hasAnimated) {
					// Анимация заголовка и текста
					gsap.fromTo(titleRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
					gsap.fromTo(textRef.current, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3 });

					// Анимация слайдов
					const slides = swiperRef.current.swiper.slides;
					slides.forEach((slide, index) => {
						gsap.fromTo(slide, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, delay: index * 0.2 });
					});

					setHasAnimated(true);
					observer.unobserve(entry.target);
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
	}, [hasAnimated]);

	return (
			<section className={'software'} ref={sectionRef}>
				<div className="software__container container">
					<h6 className="software__title" ref={titleRef}>Полезное ПО</h6>
					<p className="software__text" ref={textRef}>
						На этой странице вы найдете программное обеспечение, которое поможет
						вам мониторить и анализировать состояние вашего ПК, проверять стабильность системы,
						разгонять компоненты и следить за температурой и производительностью оборудования.
					</p>
					<Swiper
							ref={swiperRef}
							className={'mySwiper'}
							modules={[Navigation]}
							spaceBetween={40}
							slidesPerView={4}
							navigation
							loop={true}>
						{softwareData.map((software, index) => (
								<SwiperSlide key={index}>
									<span className="slide__title">{software.title}</span>
									<img src={software.img} alt={software.title} className="slide__img" />
									<p className="slide__text">{software.description}</p>
									<a href={software.link} className="slide__btn">Скачать</a>
								</SwiperSlide>
						))}
					</Swiper>

				</div>
			</section>
	);
}

export default SoftWare;

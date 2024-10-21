import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from "swiper/modules";
import RecleanerData, { RecleanerAbout, RecleanerJoin, RecleanerIcon } from "../../../Data/RecleanerData.js";
import information from '../../assets/information.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "../../components/Header.jsx";
import { NavLink } from "react-router-dom";
import 'swiper/swiper-bundle.css';
import { gsap } from 'gsap';
import './_Recleaner.scss';

gsap.registerPlugin(ScrollTrigger);

const Recleaner = () => {
	const textRef = useRef(null);
	const buttonRef = useRef(null);
	const advantagesTitleRef = useRef(null);
	const advantagesItemsRef = useRef([]);
	const joinTitleRef = useRef(null);
	const joinItemsRef = useRef([]);

	const handleDownload = () => {
		const fileUrl = import.meta.env.VITE_DOWNLOAD_LINK;
		const link = document.createElement('a');
		link.href = fileUrl;
		link.setAttribute('download', 'RECLEANER.exe');
		document.body.appendChild(link);
		link.click();
		link.remove();
	};


	useEffect(() => {
		// Анимация текста
		gsap.from(textRef.current, {
			x: 100,
			opacity: 0,
			duration: 0.5,
			scrollTrigger: {
				trigger: textRef.current,
				start: "top 80%",
				once: true
			}
		});

		// Анимация кнопки
		gsap.from(buttonRef.current, {
			y: 50,
			opacity: 0,
			duration: 0.7,
			scrollTrigger: {
				trigger: buttonRef.current,
				start: "top 80%",
				once: true
			}
		});

		// Анимация заголовка "Наши преимущества"
		gsap.from(advantagesTitleRef.current, {
			x: -100,
			opacity: 0,
			duration: 0.5,
			delay: 0.8,
			scrollTrigger: {
				trigger: advantagesTitleRef.current,
				start: "top 80%",
				once: true
			}
		});

		// Анимация элементов "Наши преимущества"
		advantagesItemsRef.current.forEach((item, index) => {
			gsap.from(item, {
				y: index % 2 === 0 ? 50 : -50,
				opacity: 0,
				duration: 1,
				delay: 1,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					once: true
				}
			});
		});

		// Анимация заголовка "Присоединяйся к нам"
		gsap.from(joinTitleRef.current, {
			x: -100,
			opacity: 0,
			duration: 0.5,
			delay: 0.8,
			scrollTrigger: {
				trigger: joinTitleRef.current,
				start: "top 80%",
				once: true
			}
		});

		// Анимация элементов "Присоединяйся к нам"
		joinItemsRef.current.forEach((item) => {
			gsap.from(item, {
				y: 50,
				opacity: 0,
				duration: 1,
				delay: 1,
				scrollTrigger: {
					trigger: item,
					start: "top 80%",
					once: true
				}
			});
		});
	}, []);


	return (
			<>
				<div className="recleaner__bg"></div>
				<Header />
				<section className="recleaner">
					<div className="recleaner__info">
						<img src={information} alt="information" className="recleaner__info-img"/>
						<span className="recleaner__info-text" ref={textRef}>
                        RECLEANER версии 1.0 BETA<br/> уже доступен для скачивание
                    </span>
					</div>
					<div className="recleaner__container container">
						<div className="recleaner__content">
							<div className="recleaner__img">
								<Swiper
										effect="coverflow"
										grabCursor={true}
										centeredSlides={true}
										slidesPerView="auto"
										loop={true}
										navigation={{
											nextEl: '.swiper-button-next',
											prevEl: '.swiper-button-prev',
										}}
										coverflowEffect={{
											rotate: 15,
											stretch: 0,
											depth: 300,
											modifier: 1,
											slideShadows: true,
										}}
										modules={[Navigation, EffectCoverflow]}
										className="mySwiper"
								>
									{RecleanerData.map((item) => (
											<SwiperSlide key={item.id}>
												<img src={item.src} alt={item.alt}/>
											</SwiperSlide>
									))}
									<div className="swiper-button-prev"></div>
									<div className="swiper-button-next"></div>
								</Swiper>
							</div>
							<div className="recleaner__content-text">
								<h6 className="recleaner__title">RECLEANER</h6>
								<p className="recleaner__text">
									Портативная программа для быстрой настройки системы, обширным <br/>
									магазином приложений, очистки мусора и многое другое! Забудьте <br/>
									о волнениях по поводу свободного места на диске, утечек оперативной <br/>
									памяти и мониторинга ваших действий Windows!
								</p>
								<button className="recleaner__btn" onClick={handleDownload} ref={buttonRef}>
									скачать
								</button>
							</div>
						</div>
						<div className="recleaner__about">
							<span className="recleaner__about-title" ref={advantagesTitleRef}>Наши преимущества</span>
							<div className="recleaner__about-content">
								{RecleanerAbout.map((item, index) => (
										<div key={item.id} className="recleaner__about-item"
										     ref={el => advantagesItemsRef.current[index] = el}>
											<img src={item.src} alt={item.alt} className="about__img"/>
											<span className="about__subtitle">{item.title}</span>
										</div>
								))}
							</div>
						</div>
						<div className="recleaner__join">
							<span className="recleaner__join-title" ref={joinTitleRef}>Присоединяйся к нам</span>
							<div className="recleaner__join-content">
								{RecleanerJoin.map((item, index) => (
										<div key={item.id} className="recleaner__join-item" ref={el => joinItemsRef.current[index] = el}>
											<div className="join__content-text">
												<img src={item.src} alt="" className="join-img"/>
												<span className="join__subtitle">{item.title}</span>
											</div>
											<p className="join__description">{item.description}</p>
										</div>
								))}
							</div>
						</div>
					</div>
					<div className="recleaner__social" id="social">
						{RecleanerIcon.map((item) => (
								<div key={item.id} className="recleaner__item">
									<NavLink to={item.href} rel="noopener noreferrer">
										<img src={item.src} alt={item.alt} className="recleaner__item-img"/>
									</NavLink>
								</div>
						))}
					</div>
				</section>
			</>
	);
};

export default Recleaner;

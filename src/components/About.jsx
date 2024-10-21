import React, {useCallback, useEffect, useRef} from 'react';
import video from '../assets/bgVideo.mp4';
import { gsap } from 'gsap';
import './_About.scss';

const About = () => {
	const titleRef = useRef(null);
	const textRef = useRef(null);
	const linkRef = useRef(null);
	const videoRef = useRef(null);

	const animateElements = (element, animationType) => {
		switch (animationType) {
			case 'title':
				gsap.fromTo(element, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5, delay: 0.1 });
				break;
			case 'text':
				gsap.fromTo(element, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 });
				break;
			case 'link':
				gsap.fromTo(element, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.6 });
				break;
			case 'video':
				gsap.fromTo(element, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const element = entry.target;
					if (element === titleRef.current) {
						animateElements(element, 'title');
					} else if (element === textRef.current) {
						animateElements(element, 'text');
					} else if (element === linkRef.current) {
						animateElements(element, 'link');
					} else if (element === videoRef.current) {
						animateElements(element, 'video');
					}
					observer.unobserve(element);
				}
			});
		}, options);

		if (titleRef.current) observer.observe(titleRef.current);
		if (textRef.current) observer.observe(textRef.current);
		if (linkRef.current) observer.observe(linkRef.current);
		if (videoRef.current) observer.observe(videoRef.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleClick = useCallback(() => {
		window.scrollBy({
					top: 8000,
					behavior: 'smooth',
				});
	})

	return (
			<section className={'about'}>
				<div className="about__container container">
					<h2 className="about__title" ref={titleRef}>
						Используйте ресурсы своего ПК по максимуму
					</h2>
					<div className="about__content">
						<div className="about__content-text">
							<p className="about__text" ref={textRef}>
								Мы оптимизируем ваш компьютерный опыт и помогаем
								извлечь максимальную производительность из вашего
								оборудования. Специализируемся на настройке
								ПК, ноутбуков и моноблоков с Windows.
							</p>
							<button className="about__btn" onClick={handleClick}>
								Купить оптимизацию
							</button>
						</div>
						<div className="about__video">
							<video
									src={video}
									className="video"
									autoPlay
									loop
									muted
									ref={videoRef}>
							</video>
						</div>
					</div>
				</div>
			</section>
	);
};

export default About;

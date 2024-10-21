import React, { useEffect, useRef } from 'react';
import AudienceData from '../../Data/AudienceData.js';
import { gsap } from 'gsap';
import './_Audience.scss';

const Audience = () => {
	const imagesRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target;
					const index = img.dataset.index;

					gsap.fromTo(img,
							{ opacity: 0, scale: 0.8, y: 20 },
							{ opacity: 1, scale: 1, y: 0, duration: 0.5, delay: index * 0.2 }
					);
					observer.unobserve(img);
				}
			});
		}, { threshold: 0.1 });

		imagesRef.current.forEach((img, index) => {
			if (img) {
				img.dataset.index = index;
				observer.observe(img);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
			<section className="audience">
				<div className="audience__container container">
					<div className="audience__content-text">
						<span className="audience__subtitle">audience</span>
						<h3 className="audience__title">Наши клиенты и<br /> те, кто нам доверяет</h3>
					</div>
					<div className="audience__content">
						{AudienceData.map((item, index) => (
								<div className="audience__content-item" key={index}>
									<img
											src={item.src}
											alt={item.alt}
											className="audience__content-img"
											ref={el => imagesRef.current[index] = el}
									/>
									<div className="audience__nickname">{item.alt}</div>
								</div>
						))}
					</div>
				</div>
			</section>
	);
};

export default Audience;

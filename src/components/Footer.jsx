import React from 'react';
import FooterData from "../../Data/FooterData.js";
import './_Footer.scss';

const Footer = () => {
	return (
			<footer className="footer">
				<div className="footer__container container">
					<div className="footer__logo">
						<a href="#">
							<span className="logo">CleanTweaking</span>
						</a>
					</div>
					<ul className="footer__content">
						{FooterData.map((item, index) => (
								<li key={index} className="footer__social">
									<a href={item.link} target="_blank" className={'footer__social-link'} rel="noopener noreferrer">
										<img src={item.images} alt="" className="footer__social-img"/>
									</a>
								</li>
						))}
					</ul>
				</div>
				<p className="footer__text">
					©2024 все права защищены
				</p>
			</footer>
	);
};

export default Footer;

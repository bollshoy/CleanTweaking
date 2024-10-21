import React, {useState, useEffect, useRef, useCallback, useMemo} from 'react';
import TabData, {TabIcon, TabImg} from '../../Data/TabData.js';
import {gsap} from 'gsap';
import './_Tab.scss';

const Tab = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [currency, setCurrency] = useState('RUB');
	const contentRef = useRef(null);
	const lastTextRef = useRef(null);
	const [hasAnimated, setHasAnimated] = useState(false);

	const price = useMemo(() => ({
		RUB: TabData[activeTab].priceRUB,
		EUR: TabData[activeTab].priceEU,
	}), [activeTab])

	const handleToggleCurrency = useCallback(() => {
		setCurrency((prevCurrency) => (prevCurrency === 'RUB' ? 'EUR' : 'RUB'));
	})

	useEffect(() => {
		if (activeTab === 0 && !hasAnimated) {
			gsap.fromTo(contentRef.current,
					{opacity: 0, y: 20},
					{opacity: 1, y: 0, duration: 0.5}
			);

			gsap.fromTo(lastTextRef.current,
					{x: -100, opacity: 0},
					{x: 0, opacity: 1, duration: 0.5, delay: 0.5}
			);

			setHasAnimated(true);
		}
	}, [activeTab, hasAnimated]);

	return (
			<div className='tabs__wrapper' id={'tab'}>
				<div className="tabs">
					{TabData.map((tab, index) => (
							<div key={index} className="tabs__btn-content">
								<button
										className={`tabs__btn ${activeTab === index ? 'active' : ''}`}
										onClick={() => setActiveTab(index)}>
									<img src={TabIcon[index].images} alt="" className="tabs__btn-img"/>
									{tab.title}
								</button>
							</div>
					))}
				</div>
				<div className="tabs__content">
					{TabData[activeTab] && (
							<div className='tabs__content-item'>
								<div className="tabs__content-content" ref={contentRef}>
									<span className="tabs__content-title">{TabData[activeTab].title}</span>
									{TabData[activeTab].content.map((text, index) => (
											<p key={index} className="tabs__content-text"
											   dangerouslySetInnerHTML={{__html: text.replace(/\n/g, '<br/>')}}/>
									))}
									<div className="tab__price">
										<div className="currency-toggle">
											<input
													type="checkbox"
													id="currency-switch"
													checked={currency === 'EUR'}
													onChange={handleToggleCurrency}
											/>
											<label htmlFor="currency-switch">Toggle Currency</label>
										</div>
										<p className="price__text">{price[currency]}</p>
									</div>
									<p className="tabs__content-text"
									   ref={lastTextRef}
									   dangerouslySetInnerHTML={{__html: TabData[activeTab].description.replace(/\n/g, '<br/>')}}/>
								</div>
								<div className="tabs__content-img">
									<img src={TabImg[activeTab].images} alt="img"/>
								</div>
							</div>
					)}
				</div>
			</div>
	);
};

export default Tab;

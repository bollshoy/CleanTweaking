import React from 'react';
import googleDrive from '../assets/googleDrive.svg';
import {NavLink} from "react-router-dom";
import './_Test.scss';

const Test = () => {
	return (
			<section className="test">
				<div className="test__container container">
					<div className="test__text">
						<h4 className="test__title">
							Тесты FPS в играх после Ultimate оптимизации в сравнении с обычной настройкой
						</h4>
						<p className="test__text">В игре Counter-Strike 2</p>
					</div>
					<div className="test__content">
						<button className="test__btn">
							<img src={googleDrive} alt="googleDrive" className="test__btn-img"/>
							<NavLink className={'test__link'}
							         to={'https://docs.google.com/spreadsheets/d/152QqeeHofqn8fXe0O76v8l33R3QqDkhr/edit?gid=830117446#gid=830117446'}
							         target={'_blank'}>
								Открыть таблицу тестов
							</NavLink>
						</button>
					</div>
				</div>
			</section>
	);
};

export default Test;

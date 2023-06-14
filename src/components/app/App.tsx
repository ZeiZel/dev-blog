import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.scss';
import '../../styles/index.scss';
import { MainPageAsync } from '../../pages/MainPage/MainPage.async';
import { AboutPageAsync } from '../../pages/AboutPage/AboutPage.async';
import { Theme } from '../../theme/ThemeContext';
import { useTheme } from '../../theme/useTheme';
import { classNames } from '../../helpers/classNames/classNames';

export const App = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button className={'button'} onClick={toggleTheme}>
				toggle
			</button>
			<Link to={'/'}>Главная</Link>
			<Link to={'/about'}>О нас</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/'} element={<MainPageAsync />} />
					<Route path={'/about'} element={<AboutPageAsync />} />
				</Routes>
			</Suspense>
		</div>
	);
};

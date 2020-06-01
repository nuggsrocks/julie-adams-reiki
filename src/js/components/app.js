// dependencies
import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
//components
import Menu from './menu';
import Main from './main';
import Footer from './footer';
//stylesheet
import '../../scss/index.scss';


const App = () => {
	return (
		<BrowserRouter basename='/'>
		<Route path='/'>
			<Menu/>
			<Main/>
			<Footer/>
		</Route>
		<Redirect to='/about-me'/>
		</BrowserRouter>
	)
};

export default App;

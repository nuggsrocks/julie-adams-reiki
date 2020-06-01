// dependencies
import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
//components
import Menu from './menu';
import Footer from './footer';
//routes
import routes from '../routes';
//stylesheet
import '../../scss/index.scss';


const App = () => {
	return (
		<BrowserRouter basename='/'>
		<Route path='/'>
			<Menu/>
		</Route>
		<Switch>
		{
			routes.map(({path, Component}) => 
				<Route key={path} exact path={path}>
					<div className='component'>
						<Component/>
					</div>
				</Route>
			)
		}
		</Switch>
		<Route path='/'>
			<div className='footer'>
				<Footer/>
			</div>
		</Route>
		<Redirect to='/about-me'/>
		</BrowserRouter>
	)
};

export default App;

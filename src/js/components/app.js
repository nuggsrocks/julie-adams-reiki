// dependencies
import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
//components
import Menu from './menu';
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
		<div className='component-div'>
		{
			routes.map(({path, Component}) => 
				<Route key={path} exact path={path}>
					<Component/>
				</Route>
			)
		}
		</div>
		<Redirect to='/about-me'/>
		</BrowserRouter>
	)
};

export default App;

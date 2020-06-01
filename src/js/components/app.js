// dependencies
import React from 'react';
import {BrowserRouter, Route, Redirect, Link} from 'react-router-dom';
// components
import AboutMe from './about-me';
import Contact from './contact';
import References from './references';
import ReikiSession from './reiki-session';
import ReikiTherapy from './reiki-therapy';
import Services from './services';
import Testimonials from './testimonials';
//stylesheet
import '../../scss/index.scss';


const routes = [
	{name: 'About Me', path: '/about-me', Component: AboutMe},
	{name: 'Contact', path: '/contact', Component: Contact},
	{name: 'References', path: '/references', Component: References},
	{name: 'Reiki Session', path: '/reiki-session', Component: ReikiSession},
	{name: 'Reiki Therapy', path: '/reiki-therapy', Component: ReikiTherapy},
	{name: 'Services', path: '/services', Component: Services},
	{name: 'Testimonials', path: '/testimonials', Component: Testimonials}
];

const Menu = () => {
	return (
		<nav id='menu'>
			<h1>
				Julie Adams Reiki
			</h1>
			<div>
				{
					routes.map(({name, path}) => 
						<Link class='link' key={name} to={path}>{name}</Link>
					)
				}
			</div>
		</nav>
	)
}


const App = () => {
	return (
		<BrowserRouter basename='/'>
		<Route path='/'>
			<Menu/>
		</Route>
		{
			routes.map(({path, Component}) => 
				<Route key={path} exact path={path}>
					<Component/>
				</Route>
			)
		}
		<Redirect to='/about-me'/>
		</BrowserRouter>
	)
};

export default App;

import React from 'react';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import AboutMe from './about-me';
import Contact from './contact';
import References from './references';
import ReikiSession from './reiki-session';
import ReikiTherapy from './reiki-therapy';
import Services from './services';
import Testimonials from './testimonials';
import '../../scss/index.scss';


const routes = [
	{path: '/about-me', Component: AboutMe},
	{path: '/contact', Component: Contact},
	{path: '/references', Component: References},
	{path: '/reiki-session', Component: ReikiSession},
	{path: '/reiki-therapy', Component: ReikiTherapy},
	{path: '/services', Component: Services},
	{path: '/testimonials', Component: Testimonials}
];


const App = () => {
	return (
		<BrowserRouter basename='/'>
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

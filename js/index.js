import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import '../scss/index.scss';

window.onload = () => {
	let body = document.querySelector('body');
	body.className = body.className.replace('preload', '');
};

import Header from './header';
import Footer from './footer';
import routes from './routes';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header/>
				<main className='flexbox'>
				<Switch>
					
					{
						routes.map(({path, Component}) => 
							<Route exact path={path}>
								<Component/>
							</Route>
						)
					}
					
				</Switch>
				</main>
				<Footer/>
			</div>
		);
	}
}

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.querySelector('div#root'));
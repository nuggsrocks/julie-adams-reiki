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
		this.state = {
			currentLocation: '/'
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.setState({
			currentLocation: event.target.name
		});
	}

	render() {
		return (
			<div>
				<Header handleClick={this.handleClick} currentLocation={this.state.currentLocation}/>

				<main className='flexbox'>
					<Switch>
						
						{
							routes.map(({path, Component}) => 
								<Route exact path={path} key={path}>
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
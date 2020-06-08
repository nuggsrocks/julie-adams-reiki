// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//components
import Menu from './components/menu';
import Main from './components/main';
import Footer from './components/footer';
//stylesheet
import '../scss/index.scss';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '/'
		};
		this.changeLocation = this.changeLocation.bind(this);
	}

	changeLocation(loc) {
		this.setState({
			location: loc
		});
	}

	render() {
		return (
			<BrowserRouter basename='/'>
				<Route path='/'>
					<Menu location={this.state.location} changeLocation={this.changeLocation}/>
					<Main location={this.state.location}/>
					<Footer/>
				</Route>
			</BrowserRouter>
		)
	}
}

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

ReactDOM.render(<App/>, document.getElementById('root')); // eslint-disable-line no-undef

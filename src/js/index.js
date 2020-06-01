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


const App = () => {
	return (
		<BrowserRouter basename='/'>
		<Route path='/'>
			<Menu/>
			<Main/>
			<Footer/>
		</Route>
		</BrowserRouter>
	)
};

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

ReactDOM.render(<App/>, document.getElementById('root')); // eslint-disable-line no-undef

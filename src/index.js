import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import App from './js/main';

if(typeof(module.hot) !== 'undefined') { // eslint-disable-line no-undef
    module.hot.accept() // eslint-disable-line no-undef
}

ReactDOM.render(<App/>, document.getElementById('root')); // eslint-disable-line no-undef
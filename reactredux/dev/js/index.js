import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';
import App from './components/App';
import '../scss/style.scss';

const store = applyMiddleware(thunk)(createStore);

ReactDOM.render(
	<Provider store={store(allReducers)}>
		<App />
	</Provider>, document.getElementById('root'));

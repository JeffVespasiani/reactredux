import {combineReducers} from 'redux';
import AppReducer from './reducer-apps.js';
import AppChosen from './reducer-active';

const allReducers = combineReducers({
	apps: AppReducer,
	active: AppChosen
});

export default allReducers;
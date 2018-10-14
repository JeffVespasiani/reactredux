import {combineReducers} from 'redux';
import {appReducer} from './reducer-apps.js';
import AppChosen from './reducer-active';

const allReducers = combineReducers({
	appStuff: appReducer,
	active: AppChosen
});

export default allReducers;
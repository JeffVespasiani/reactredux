import {combineReducers} from 'redux';
import AppReducer from './reducer-apps.js';
import AppChosen from './reducer-active';

//This combines all of the reducers into one object to dispatch the data to the store.
const allReducers = combineReducers({
	apps: AppReducer,
	active: AppChosen
});

export default allReducers;
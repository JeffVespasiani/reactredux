import axios from "axios";

//This sets the appropriate prop of the state to the app name picked when the user picks it.
export const selectApp = (app) => {
	return {
		type: "APP_SELECTED",
		appname: app
	}
};

export const FETCH_APPS_START = 'FETCH_APPS_START';
export const FETCH_APPS_SUCCESS = 'FETCH_APPS_SUCCESS';
export const FETCH_APPS_FAIL = 'FETCH_APPS_FAIL';

export const fetchAppsStart = () => ({
	type: FETCH_APPS_START
});

export const fetchAppsSuccess = appNames => ({
	type: FETCH_APPS_SUCCESS,
	apps: {appNames}
});

export const fetchAppsFail = error => ({
	type: FETCH_APPS_FAIL,
	apps: {error}
});

export function fetchApps() {
	return dispatch => {
		dispatch(fetchAppsStart());
		return fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json')
		.then(response => response.json())
		.then(json => {
			dispatch(fetchAppsSuccess(json.feed.entry));
			console.log(json);
			return json.feed.entry;
		})
		.catch(error => dispatch(fetchAppsFail(error)));
	}
}

export function loadJson(){
	return(dispatch)=>{
		return axios.get("http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json").then((response)=>{
			dispatch(getInfo(response.data.feed.entry));
		})
	}
};

export function getInfo(theInfo){
	return{
		type: "JSON_DATA",
		apps: theInfo
	}
};
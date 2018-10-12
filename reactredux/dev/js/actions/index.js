import axios from "axios";

//This sets the appropriate prop of the state to the app name picked when the user picks it.
export const selectApp = (app) => {
	return {
		type: "APP_SELECTED",
		appname: app
	}
};

export function somethingsWrong(){
	return{
		type: 'JSON_ERROR',
	};
}

export function loadingJson(){
	return{
		type: 'JSON_LOADING',
	};
}

export function jsonSuccess(appInfo){
	return{
		type: 'JSON_FOUND',
		appInfo
	};
}
/*
export function fetchJson(){
	return (dispatch) => {
		dispatch(loadingJson());
		fetch('http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json')
		.then((response)=>{
			return response;
		})
		.then((response) => response.json())
		.then((appItems) => dispatch(jsonSuccess(appItems))
		.catch(() => dispatch(somethingsWrong());
	};
}
*/
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
		apps: theinfo
	}
};
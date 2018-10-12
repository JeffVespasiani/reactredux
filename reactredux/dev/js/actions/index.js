import axios from "axios";

export const selectApp = (app) => {
	return {
		type: "APP_SELECTED",
		appname: app
	}
};

export function loadJson(){
	return(dispatch)=>{
		return axios.get("http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json").then((response)=>{
			dispatch(getInfo(response.data.feed.entry));
			console.log(response);
		})
	}
}

export function getInfo(theInfo){
	return{
		type: "JSON_DATA",
		info: theInfo
	}
}
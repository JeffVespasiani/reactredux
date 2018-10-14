let axios = require("axios");

export let startAppGet = () => {
	return {
		type: 'Start_App_Get'
	}
}

export let endAppGet = (appArr) => {
	return {
		type: 'End_App_Get',
		appArr
	}
}

export let fetchApps = () => {
	let url = "http://phobos.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/toppaidapplications/limit=100/json"
	return (dispatch) => {
		dispatch(startAppGet());
		return axios.get(url)
		.then((response) =>  {
			console.log(response)
			let appsArr = response.data.feed.entry
			dispatch(endAppGet(appsArr))
		},
		(error) => {
			console.log(error)
		})
	}
}

export const selectApp = (app) => {
	return {
		type: "APP_SELECTED",
		appname: app
	}
};
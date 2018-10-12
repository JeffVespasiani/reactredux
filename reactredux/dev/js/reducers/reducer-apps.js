import {fetchApps} from '../actions/index';
import {FETCH_APPS_START, FETCH_APPS_SUCCESS, FETCH_APPS_FAIL} from '../actions/index';

export default function(state=null, action) {
	
	switch(action.type){
		case FETCH_APPS_SUCCESS:
			return action.apps;
			break;
		case FETCH_APPS_FAIL:
			return "error";
			break;
	}
	
	//Placeholder data to test app functionality; will be removed when JSON call works
	return [
		{
			id: 1,
			first: "testone",
			second: "testone",
			description: "Just put some stuff here",
		},
		{
			id: 2,
			first: "testtwo",
			second: "testtwo",
			description: "Other stuff here",
		},
		{
			id: 3,
			first: "testthree",
			second: "testthree",
			description: "Stuff",
		}
	]
	
}

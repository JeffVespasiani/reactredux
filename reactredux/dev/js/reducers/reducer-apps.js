import {fetchApps} from '../actions/index';
import {FETCH_APPS_START, FETCH_APPS_SUCCESS, FETCH_APPS_FAIL} from '../actions/index';

export default function(state=null, action) {
	
	switch(action.type){
		case FETCH_APPS_SUCCESS:
			return action.apps;
			break;
	}
	
	//Placeholder data to test app functionality; will be removed when JSON call works
	return [
		{
			id: 1,
			"im:name":{label: "testone"},
			"summary": {label: "Just put some stuff here"},
		},
		{
			id: 2,
			"im:name":{label: "testtwo"},
			"summary": {label: "Other stuff here"},
		},
		{
			"id": 3,
			"im:name": {label: "testthree"},
			"summary": {label: "Stuff"},
		}
	]
	
}

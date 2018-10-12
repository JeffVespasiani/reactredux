import * as Actions from '../actions/index';

export default function(state=null, action) {
	
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

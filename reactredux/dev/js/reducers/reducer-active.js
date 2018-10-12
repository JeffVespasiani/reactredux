//This reducer's responsible for setting the state when the user picks the app.
//The state is set to a default value of "null" to prevent errors upon starting up the program
export default function(state=null, action) {
	switch(action.type) {
		case "APP_SELECTED":
			return action.appname;
			break;
	}
	return state;
}
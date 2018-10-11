export default function(state=null, action) {
	switch(action.type) {
		case "APP_SELECTED":
			return action.appname;
			break;
	}
	return state;
}
export let appReducer = (state={isGetting: false, appsArr: []}, action) => {
	switch(action.type){
		case 'Start_App_Get':
			return {
				isGetting: true
			}
			break;
		case 'End_App_Get':
			return {
				isGetting: false,
				appsArr: action.appArr
			}
			break;
		default:
			return state;
	}
}
export const selectApp = (app) => {
	console.log("User clicked on ", app.first);
	return {
		type: "APP_SELECTED",
		appname: app
	}
};
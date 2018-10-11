export const selectApp = (app) => {
	return {
		type: "APP_SELECTED",
		appname: app
	}
};
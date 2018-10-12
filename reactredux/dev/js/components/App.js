import React from 'react';
import AppList from '../containers/app-list';
import AppDetail from '../containers/app-detail'

//This calls in the functions from the containers that show the information requested
const App = () => (
	<div>
		<h2>App Name List</h2>
		<AppList />
		<hr />
		<h2>App Details</h2>
		<AppDetail />
	</div>
);

export default App;
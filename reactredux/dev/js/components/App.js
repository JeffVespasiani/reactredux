import React from 'react';
import AppList from '../containers/app-list';
import AppDetail from '../containers/app-detail'

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
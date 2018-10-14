import React, {Component} from 'react';
import AppList from '../containers/app-list';
import AppDetail from '../containers/app-detail';
import {connect} from 'react-redux';
//This calls in the functions from the containers that show the information requested
const App = () => (
	<div>
		<h2>App Name List</h2>
		<p className="centertext">Select an app to learn more!</p>
		<hr />
		<AppList />
		<h2>App Details</h2>
		<AppDetail />
	</div>
);

export default App;
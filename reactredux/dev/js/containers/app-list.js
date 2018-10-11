import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectApp} from '../actions/index';

class AppList extends Component {
	
	createAppList(){
	return this.props.apps.map((app) => {
			return (
				<li key={app.id} onClick={() => this.props.selectApp(app)}>{app.first}</li>
			)
		});
	}
	
	render() {
		return (
			<ul>
				{this.createAppList()}
			</ul>
		);
	}
	
}

function mapStateToProps(state) {
	return {
		apps: state.apps
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectApp: selectApp}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList);
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
let actions = require('../actions/index');

export class AppList extends Component {
	componentWillMount() {
		this.props.fetchApps();
	}
	
	render() {
		let {appStuff} = this.props
		if(appStuff.isGetting == true) {
			return <p>Loading...</p>
		}
		else if (appStuff.isGetting == false && appStuff.appsArr.length >= 1) {
			return(
				<div>
				<ul>
				{appStuff.appsArr.map((app) => {
					return (<li><button key={app.id} className="menu" onClick={() => this.props.selectApp(app)}><img src={app['im:image'][0].label} /><br />{app['im:name'].label}</button></li>
					)
				})}
				</ul>
				</div>
			)
		}
		else {
			return (
				<p>There has been an error</p>
			)
		}
	}
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectApp: selectApp}, dispatch);
}

export default connect(mapStateToProps, actions)(AppList);
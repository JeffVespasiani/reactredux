import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchApps} from '../actions/index';
import {selectApp} from '../actions/index';

class AppList extends Component {
	
	createAppList(){
		console.log(this.props.apps);
	//This collects the data from the API passed to the state to display in a list.
	return this.props.apps.map((app) => {
			return (
				<li><button key={app.id} className="menu"  onClick={() => this.props.selectApp(app)}><img src={app['im:image'][0].label} /><br />{app['im:name'].label}</button></li>
			)
		});
	}
	
	//The this.createAppList() in the render uses curly brackets to exit the JSX statement to call in the createAppList function to render the list of apps.
	render() {
		const {apps} = this.props;
		return (
			<ul>
				{this.createAppList()}
			</ul>
		);
	}
	
}

//This sets the apps attribute of the state to the Apps API retrieved from the reducers, and passes it to the function as a prop.  This also automatically updates whenever a that state is changed.
function mapStateToProps(state) {
	return {
		apps: state.apps
	}
}

//This gets the actions and gives them to the app as props.  It allows the app to use the selectApp function in Actions.
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectApp: selectApp}, dispatch);
}

//This exports the function of the program so it can be accessed by the rest of the program.  It passes the mapStateToProps and mapDispatchToProps functions as attributes.
export default connect(mapStateToProps, mapDispatchToProps)(AppList);
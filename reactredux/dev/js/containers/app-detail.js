import React, {Component} from 'react';
import {connect} from 'react-redux';

class AppDetail extends Component {
	
    render() {
		
		//If the user hasn't picked anything yet, this default value is shown.
        if (!this.props.app) {
            return (<div>Select an app</div>);
        }
        return (
            <div>
				<h2>{this.props.app['im:name'].label} </h2>
				<p>{this.props.app.summary.label}</p>
			</div>
        );
    }
}

//This brings in the function in Actions that declares which app was picked by the user.
function mapStateToProps(state) {
    return {
        app: state.active
    };
}

export default connect(mapStateToProps)(AppDetail);

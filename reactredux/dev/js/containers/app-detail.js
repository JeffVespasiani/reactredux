import React, {Component} from 'react';
import {connect} from 'react-redux';

class AppDetail extends Component {
	
    render() {
		
        if (!this.props.app) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
				<h2>{this.props.app.first} {this.props.app.second}</h2>
				<p>{this.props.app.description}</p>
			</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        app: state.active
    };
}

export default connect(mapStateToProps)(AppDetail);

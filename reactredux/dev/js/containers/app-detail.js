import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

class AppDetail extends Component {
	
    render() {
		
		//If the user hasn't picked anything yet, this default value is shown.
        if (!this.props.app) {
            return (<div><p className="centertext">Select an app</p></div>);
        }
        return (
            <div>
				<img src={this.props.app['im:image'][2].label} />
				<h2>{this.props.app['im:name'].label} </h2>
				<p>Release date: {moment(this.props.app['im:releaseDate'].label).format('MM/DD/YYYY')}</p>
				<p>{this.props.app.summary.label}</p>
				<p>Price: {this.props.app['im:price'].label} {this.props.app['im:price'].attributes.currency}</p>
				<p>Category: {this.props.app.category.attributes.label}</p>
				<p><a href={this.props.app.link.attributes.href}>Buy it here!</a></p>
				<p>Publisher: <a href={this.props.app['im:artist'].attributes.href}>{this.props.app['im:artist'].label}</a></p>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';

class AppDetail extends Component {
    render() {
        if (!this.props.app) {
            return (<div>Select a user...</div>);
        }
        return (
            <div>
                <h2>{this.props.app.feed.entry.['im:name'].label}</h2>
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

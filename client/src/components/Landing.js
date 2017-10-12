import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        return(
            <div>
                <p> {this.props.uid} HI</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(mapStateToProps)(Landing);
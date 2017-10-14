import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
    render() {
        return(
            <div style={{textAlign: 'center'}}>
                <p>Hi, Welcome to Mail Helperr collect feedback from your users.</p>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(mapStateToProps)(Landing);
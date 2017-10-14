import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { serverProxy } from '../config/keys';
import Payments from './Payments';

class Header extends Component {
    rightcontent() {
        const id = this.props._id;
        const {credits} = this.props;
        if(id === false)
            return(
                <li><a href={`/auth/google/`}>Log In!(With Google)</a></li>
            );
        else if(id != null)
            return(
                <div>
                    <li> <a > <Payments /> </a></li>
                    <li> <a href={'/'}> Credits:{credits} </a></li>
                    <li> <a href={'/auth/logout/'}>Logout</a></li>
                </div>
            );
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <Link to={this.props._id ? '/surveys': '/' } 
                    className="brand-logo"
                    style={{margin: '0 10px'}}
                    >
                        Mail Helperr
                    </Link>
                    <ul className="right hide-on-med-and-down ">
                        {this.rightcontent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(mapStateToProps)(Header);
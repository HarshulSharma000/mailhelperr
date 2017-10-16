import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


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
            return([
                <li key='1'> <a > <Payments /> </a></li>,
                <li key='2'> <a href={'/'}> Credits:{credits} </a></li>,
                <li key='3'> <a href={'/auth/logout/'}>Logout</a></li>
            ]);
    }
    render() {
        return(
            <div>
                <nav>
                    <div className="nav-wrapper blue-grey darken-4">
                        <Link to={this.props._id ? '/surveys': '/' } 
                        className="brand-logo"
                        style={{margin: '0 10px'}}
                        >
                            Mail Helperr
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            {this.rightcontent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state.auth;
}

export default connect(mapStateToProps)(Header);
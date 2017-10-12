import React,{Component} from 'react';

import { serverProxy } from '../config/keys';

class Header extends Component {
    render() {
        return(
            <nav>
                <div className="nav-wrapper blue-grey darken-4">
                    <a href="#" className="brand-logo">Mail Helperr</a>
                    <ul className="right hide-on-med-and-down ">
                        <li><a href="/api/current_user/">Surveys</a></li>
                        <li><a href={`/auth/google/`}>Components</a></li>
                        <li><a href={`/auth/google/`}>Log IN!</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
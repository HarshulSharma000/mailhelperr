import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

class Dashboard extends Component{
    render() {
        return ( 
            <div style={{textAlign: 'center'}}>
                <p> You have successfully logged in.. Ready to collect feedbacks?</p>
                <Link to='/surveys/new' className='btn-floating btn-large right red'>
                    <i className='material-icons' > add </i>
                </Link>
            </div>
        ); 
    }
}

export default Dashboard;
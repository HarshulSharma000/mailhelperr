import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import SurveyList from './survey/SurveyList';

class Dashboard extends Component{
    render() {
        return ( 
            <div style={{textAlign: 'center'}}>
                <SurveyList />
                <Link to='/surveys/new' className='btn-floating btn-large right red'>
                    <i className='material-icons' > add </i>
                </Link>
            </div>
        ); 
    }
}

export default Dashboard;
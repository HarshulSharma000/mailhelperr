import React,{Component} from 'react';
import {reduxForm} from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    state = {showFormReview:false};
    render() {
        if(!this.state.showFormReview) {
            return( 
            <SurveyForm
            onSurveySubmit={() => this.setState({showFormReview: true})}
            /> 
            );
        }
        return( 
        <SurveFormReview 
        onCancel={() => this.setState({showFormReview: false})}
        />
        );
    }
}

export default reduxForm({
    form: 'SurveyForm',
    destroyOnUnmount: true
})(SurveyNew);
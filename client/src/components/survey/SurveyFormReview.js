import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {withRouter,history} from 'react-router-dom';

import * as actions from '../../actions';
import formFields from './formFields';

class SurveyFormReview extends Component {
    // constructor(props){
    //     super(props);
    //     const {formValues} = this.props;
    //     const reviewFields = _.map(formFields, ({ name, label }) => {
    //         return (
    //         <div key={name}>
    //             <label>{label}</label>
    //             <div>
    //             {formValues[name]}
    //             </div>
    //         </div>
    //         );
    //     });
    // }
    renderReviewFields() {
        const {formValues} = this.props;
        return (
            _.map(formFields, ({name,label}) =>{ return(
                <div key={name}>
                    <label>{label}</label>
                    <div>
                        {formValues[name]}
                    </div>
                </div>
            )}));
    }
    
    render() {
        const {formValues, submitSurvey, history, onCancel} = this.props;
        console.log(formValues);
        console.log(this.renderReviewFields());
        return(
            <div>
                <h3>Are you Sure?</h3>
                <h4>I mean really sure?</h4>
                <h5>I mean really really really sure?</h5>
                <div>
                    {this.renderReviewFields()}
                </div>
                <button className='yellow darken-3 white-text btn-flat'
                onClick={onCancel}
                >
                
                Back
                </button>
                <button className='green white-text btn-flat right'
                onClick={ () => submitSurvey(formValues,history)}
                >
                Submit
                <i className='material-icons right'> email </i>
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
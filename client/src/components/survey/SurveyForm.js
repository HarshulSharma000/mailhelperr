import React,{Component} from 'react';
import {reduxForm,Field,form} from 'redux-form';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmail from '../../utils/validateEmails';

class SurveyForm extends Component {
    renderFields() {
        return( 
            _.map(formFields, field =>
                <Field
                    key={field.name}
                    type='text'
                    name={field.name}
                    label={field.label}
                    component={SurveyField}
                />
            )
        );
    }
    render() {
        const {handleSubmit,onSurveySubmit} = this.props;
        return(
            <div>
                <form onSubmit={handleSubmit(onSurveySubmit)}>
                    {this.renderFields()}
                    <a href="/surveys" className="red btn-flat white-text">
                        Cancel
                    </a>
                    <button type='submit' className='teal btn-flat right white-text' >
                        Submit
                        <i className='material-icons right'> done </i>
                    </button>
                </form>
            </div>
        );
        //Here the above used anchor tag could not be replaced by Link because here we require
        //complete unmounting of components
    }
}

const validate = (values) => {
    const errors = {};

    errors.recipients = validateEmail(values.recipients || '');

    _.each(formFields, ({name}) => {
        if(!values[name]) {
            errors[name]='Reason for not attempting this field?';
        }
    })
    return errors;
};

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount:false
})(SurveyForm);
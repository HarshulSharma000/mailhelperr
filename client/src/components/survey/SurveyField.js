import React,{Component} from 'react';

class SurveyField extends Component {
    render() {
        const {label,input, meta: {error,touched}} = this.props;
        return(
            <div>
                <label>{label}</label>
                <input {...input} style={{marginBottom: '10px'}} />
                <div className='red-text' style={{marginBottom: '20px'}}>
                    {touched && error}
                </div>
            </div> 
        )
    }
}

export default SurveyField;
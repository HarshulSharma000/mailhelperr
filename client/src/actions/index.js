import { UPDATE_USER, UPDATE_SURVEY_LIST} from './Types';
import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
    const user = await axios.get( `/api/current_user/`);
    dispatch({
        type: UPDATE_USER,
        payload: user.data
    });
}

export const handleToken = (token) => async dispatch => {
    const user = await axios.post('/api/stripe', token);
    dispatch({
        type: UPDATE_USER,
        payload: user.data
    });
}

export const submitSurvey =  (formValues,history) => async dispatch => {
    const response = await axios.post('/api/surveys',formValues);
    console.log(response.data);
    history.push('/surveys');
    dispatch({
        type: UPDATE_USER,
        payload: response.data
    });
}

export const fetchSurveyList = () => async dispatch => {
    const response = await axios.get('/api/surveys');
    dispatch({ 
        type: UPDATE_SURVEY_LIST,
        payload: response.data
    });
    //dispatch({ Bitter memories...
    //    type: JUST_FOR_TESTING,
    //    payload: {resp:response.data}
    //});
}
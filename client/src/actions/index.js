import { FETCH_USER } from './Types';
import { serverProxy } from '../config/keys';
import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
    const user = await axios.get( `/api/current_user/`);
    dispatch({
        type: FETCH_USER,
        payload: user.data
    });
}

export const handleToken = (token) => async dispatch => {
    const user = await axios.post('/api/stripe', token);
    dispatch({
        type: FETCH_USER,
        payload: user.data
    });
}
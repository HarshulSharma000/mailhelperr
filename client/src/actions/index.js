import { FETCH_USER } from './Types';
import { serverProxy } from '../config/keys';
import axios from 'axios';

export const fetchUser = () => async (dispatch) => {
    const user = await axios.get( `/api/current_user/`);
    console.log(user);
    dispatch({
        type: FETCH_USER,
        payload: user.data._uid
    });
}
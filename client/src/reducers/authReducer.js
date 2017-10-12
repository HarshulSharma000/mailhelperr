import { FETCH_USER } from '../actions/Types';

export default (state = {uid: null}, action) => {
    switch(action.type){
        case FETCH_USER: 
            return {...this.state,uid:action.payload};
        default: return state;
    }
}   
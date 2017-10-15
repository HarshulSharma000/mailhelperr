import { UPDATE_USER } from '../actions/Types';

const INITIAL_STATE = {
    _id:null,
    _v:null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_USER: 
            if(action.payload._id === undefined) {
                return {...this.state, _id:false};
            }
            
            return {...this.state,...action.payload};
        default: return state;
    }
}   
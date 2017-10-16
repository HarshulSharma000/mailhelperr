import {UPDATE_SURVEY_LIST} from '../actions/Types';

const INITIAL_STATE = {
    surveyList: [] //Try replacing and inserting null for pink console.logs
};

export default (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case UPDATE_SURVEY_LIST:
            return (action.payload); // Everytime you don't need to apply spread operator on payload and create a new object over it i.e. sometimes we send arrays or preprocessed objects also
        default:
            return state;
    }
}
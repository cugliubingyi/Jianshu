import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login:false,
    userPic:''
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
            // return state.set('login',action.value);
            return state.merge({
               'login':action.value,
               'userPic':action.userPic
            });
        case constants.LOGOUT:
            // return state.set('login',action.value);
            return state.merge({
               'login':action.value,
               'userPic':action.userPic
            });
        default:
            return state;
    }
}

import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    login:false,
    userPic:'',
    loginTab:'login'
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
        case constants.CHANGE_LOGIN_TAB:
            return state.set('loginTab',action.loginTab);
        default:
            return state;
    }
}

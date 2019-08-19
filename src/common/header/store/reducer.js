import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused:false,
    mouseIn:false,
    msgMouseIn:false,
    userMouseIn:false,
    list:[],
    page:1,
    totalPage:1,
    msgList:[],
    userList:[],
    maskShow:false,
    current:'home'
});

export default (state = defaultState, action) => {
    switch(action.type){
        case constants.SEARCH_FOCUS:
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.merge({
                'list':action.list,
                'totalPage':action.totalPage,
            });
        case constants.CHANGE_MSG_LIST:
            return state.set('msgList',action.msgList);
        case constants.CHANGE_USER_LIST:
            return state.set('userList',action.userList);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.MSG_MOUSE_ENTER:
            return state.set('msgMouseIn',true);
        case constants.MSG_MOUSE_LEAVE:
            return state.set('msgMouseIn',false);
        case constants.USER_MOUSE_ENTER:
            return state.set('userMouseIn',true);
        case constants.USER_MOUSE_LEAVE:
            return state.set('userMouseIn',false);
        case constants.SHOW_MASK:
            return state.set('maskShow',true);
        case constants.HIDE_MASK:
            return state.set('maskShow',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page);
        case constants.CHANGE_CURRENT:
            return state.set('current',action.current);
        default:
            return state;
    }
}

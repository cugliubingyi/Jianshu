import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    list:fromJS(data.hotList),
    totalPage:Math.ceil(data.hotList.length/10)
});

const changeMsgList = (data) => ({
   type:constants.CHANGE_MSG_LIST,
   msgList:fromJS(data.msgList)
});

const changeUserList = (data) => ({
    type:constants.CHANGE_USER_LIST,
    userList:fromJS(data.userList)
});

export const changeCurrent = (current) => ({
    type:constants.CHANGE_CURRENT,
    current:fromJS(current)
});

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type:constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type:constants.MOUSE_LEAVE
});

export const msgMouseEnter = () => ({
    type:constants.MSG_MOUSE_ENTER
});

export const msgMouseLeave = () => ({
    type:constants.MSG_MOUSE_LEAVE
});

export const userMouseEnter = () => ({
    type:constants.USER_MOUSE_ENTER
});

export const userMouseLeave = () => ({
    type:constants.USER_MOUSE_LEAVE
});

export const changePage = (page) => ({
    type:constants.CHANGE_PAGE,
    page
});

export const showMask = () => ({
   type:constants.SHOW_MASK
});

export const hideMask = () => ({
   type:constants.HIDE_MASK
});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};

export const getMsgList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeMsgList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};

export const getUserList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeUserList(data.data));
        }).catch(() => {
            console.log('error');
        })
    }
};

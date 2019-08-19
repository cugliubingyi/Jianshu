import axios from 'axios';
import * as constants from './constants';
// import {fromJS} from 'immutable';

const changeLogin = (result) => ({
    type:constants.CHANGE_LOGIN,
    value:true,
    userPic:result.userPic
});

export const logout = () => ({
    type:constants.LOGOUT,
    value:false,
    userPic:''
});

export const login = (account,password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account='+account+'&password='+password).then((res) => {
            const result = res.data.data;
            if(result.status){
                dispatch(changeLogin(result));
            }else{
                alert('登录失败');
            }
        })
    }
};

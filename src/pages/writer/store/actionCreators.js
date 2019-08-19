import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

const changeWriterInfo = (result) => ({
    type:constants.CHANGE_WRITER_INFO,
    bannerPic:result.bannerPic,
    writerList:fromJS(result.writerList)
});

const addWriterList = (list,nextPage) => ({
    type:constants.ADD_WRITER_LIST,
    list:fromJS(list),
    nextPage
});

export const changeWriterDetailAttention = (attention,index) => ({
    type:constants.CHANGE_WRITER_DETAIL_ATTENTION,
    attention,
    index
});

export const getMoreList = (page) => {
   return (dispatch) => {
       axios.get('/api/writerList.json?page'+page).then((res) => {
           const result = res.data.data;
           dispatch(addWriterList(result,page+1));
       });
   }
};

export const getWriterInfo = () => {
    return (dispatch) => {
        axios.get('/api/writer.json').then((res) => {
            const result = res.data.data;
            dispatch(changeWriterInfo(result));
        })
    }
};

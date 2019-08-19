import axios from "axios";
import * as constants from './constants'
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    writerList:result.writerList,
    sliderList:result.sliderList,
    writerTotalPage:Math.ceil(result.writerList.length/5),
    quickMark:result.quickMark
});

const addHomeList = (list,nextPage) => ({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
});

export const changeWriterList = (page) => ({
   type:constants.CHANGE_WRITER_LIST,
   page
});

export const changeWriterAttention = (attention,index) => ({
    type:constants.CHANGE_WRITER_ATTENTION,
    attention,
    index
});

export const changeQuickMarkMouseEnter = () => ({
   type:constants.QUICK_MARK_MOUSE_ENTER
});

export const changeQuickMarkMouseLeave = () => ({
   type:constants.QUICK_MARK_MOUSE_LEAVE
});

export const changeBacktopMouseEnter = () => ({
    type:constants.BACKTOP_MOUSE_ENTER
});

export const changeBacktopMouseLeave = () => ({
    type:constants.BACKTOP_MOUSE_LEAVE
});

export const changeSliderMouseEnter = () => ({
    type:constants.SLIDER_MOUSE_ENTER
});

export const changeSliderMouseLeave = () => ({
    type:constants.SLIDER_MOUSE_LEAVE
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result,page+1));
        });
    }
};

export const toggleTopShow = (show) => ({
    type:constants.TOGGLE_SCROLL_TOP,
    show
});

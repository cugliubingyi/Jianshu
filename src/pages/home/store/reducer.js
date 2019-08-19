import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    sliderList: [],
    articlePage: 1,
    writerPage: 1,
    writerTotalPage: 1,
    showScroll: false,
    quickMarkMouseIn: false,
    quickMark: '',
    backtopMouseIn: false,
    sliderMouseIn: false
});

const changeHomeData = (state,action) => {
    return state.merge({
        'topicList':fromJS(action.topicList),
        'articleList':fromJS(action.articleList),
        'recommendList':fromJS(action.recommendList),
        'writerList':fromJS(action.writerList),
        'writerTotalPage':fromJS(action.writerTotalPage),
        'sliderList':fromJS(action.sliderList),
        'quickMark':fromJS(action.quickMark)
    });
};

const addArticleList = (state,action) => {
    return state.merge({
        'articleList':state.get('articleList').concat(action.list),
        'articlePage':action.nextPage
    });
};

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state,action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show);
        case constants.CHANGE_WRITER_LIST:
            return state.set('writerPage',action.page);
        case constants.CHANGE_WRITER_ATTENTION:
            const newState = JSON.parse(JSON.stringify(state.toJS()));
            newState.writerList[action.index].attention = action.attention;
            return fromJS(newState);
        case constants.QUICK_MARK_MOUSE_ENTER:
            return state.set('quickMarkMouseIn',true);
        case constants.QUICK_MARK_MOUSE_LEAVE:
            return state.set('quickMarkMouseIn',false);
        case constants.BACKTOP_MOUSE_ENTER:
            return state.set('backtopMouseIn',true);
        case constants.BACKTOP_MOUSE_LEAVE:
            return state.set('backtopMouseIn',false);
        case constants.SLIDER_MOUSE_ENTER:
            return state.set('sliderMouseIn',true);
        case constants.SLIDER_MOUSE_LEAVE:
            return state.set('sliderMouseIn',false);
        default:
            return state;
    }
}

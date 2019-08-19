import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    bannerPic: '',
    writerList: [],
    writerPage: 1
});

export default (state = defaultState,action) => {
    switch(action.type){
        case constants.CHANGE_WRITER_INFO:
            return state.merge({
                bannerPic:action.bannerPic,
                writerList:action.writerList
            });
        case constants.CHANGE_WRITER_DETAIL_ATTENTION:
            const newState = JSON.parse(JSON.stringify(state.toJS()));
            newState.writerList[action.index].writerAttention = action.attention;
            return fromJS(newState);
        case constants.ADD_WRITER_LIST:
            return state.merge({
                writerPage:action.nextPage,
                writerList:state.get('writerList').concat(action.list)
            });
        default:
            return state;
    }
}

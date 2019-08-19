import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {QuickMarkWrapper,QuickMarkInfo,QuickMarkPic} from '../style';

class QuickMark extends Component{
    render(){
        const {quickMark,quickMarkMouseIn,handleQuickMarkMouseEnter,handleQuickMarkMouseLeave} = this.props;
        return(
            <QuickMarkWrapper
                onMouseEnter={handleQuickMarkMouseEnter}
                onMouseLeave={handleQuickMarkMouseLeave}
            >
                <img src={quickMark} className="quick-mark-img" alt=""/>
                <QuickMarkInfo>
                    <h3 className="quick-mark-title">下载简书手机App <i className="iconfont icon-xiangzuojiantou_right"></i></h3>
                    <p className="quick-mark-desc">随时随地发现和创作内容</p>
                </QuickMarkInfo>
                {quickMarkMouseIn?<QuickMarkPic imgUrl={quickMark}></QuickMarkPic>:null}
            </QuickMarkWrapper>
        )
    }
}

const mapState = (state) => ({
    quickMark:state.getIn(['home','quickMark']),
    quickMarkMouseIn:state.getIn(['home','quickMarkMouseIn'])
});

const mapDispatch = (dispatch) => ({
    handleQuickMarkMouseEnter(){
        dispatch(actionCreators.changeQuickMarkMouseEnter());
    },
    handleQuickMarkMouseLeave(){
        dispatch(actionCreators.changeQuickMarkMouseLeave());
    }
});

export default connect(mapState,mapDispatch)(QuickMark);

import React,{Fragment,PureComponent} from 'react';
import Header from '../../common/header';
import {connect} from 'react-redux';
import Slider from './components/Slider';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import QuickMark from './components/QuickMark';
import {actionCreators} from './store';
import {CSSTransition} from 'react-transition-group';
import $ from 'jquery';
import {actionCreators as headerActionCreators} from '../../common/header/store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent{

    handleScrollTop(){
        // window.scrollTo(0,0);
        $('html,body').animate({scrollTop:0});
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <HomeWrapper>
                    <HomeLeft>
                        <Slider />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <QuickMark/>
                        <Writer />
                    </HomeRight>
                    {
                        this.props.showScroll?
                            <BackTop
                                onClick={this.handleScrollTop}
                                onMouseEnter={this.props.handleBacktopMouseEnter}
                                onMouseLeave={this.props.handleBacktopMouseLeave}
                            >
                                <i className="iconfont icon-xiangshangjiantouarrowup-copy"></i>
                                {/*{this.props.backtopMouseIn?<div className="backtop-desc">回到顶部</div>:null}*/}
                                <CSSTransition
                                    in={this.props.backtopMouseIn}
                                    timeout={200}
                                    classNames="fade"
                                >
                                    <div className={`backtop-desc ${this.props.backtopMouseIn?'mousein':''}`}>回到顶部</div>
                                </CSSTransition>
                            </BackTop>
                            :null
                    }
                </HomeWrapper>
            </Fragment>
        )
    }

    componentDidMount(){
        window.scrollTo(0,0);
        this.props.changeHomeData();
        this.bindEvents();
        this.props.changeCurrentToHome();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll']),
    backtopMouseIn:state.getIn(['home','backtopMouseIn'])
});

const mapDispatch = (dispatch) => ({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.changeBacktopMouseLeave());
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
    handleBacktopMouseEnter(){
        dispatch(actionCreators.changeBacktopMouseEnter());
    },
    handleBacktopMouseLeave(){
        dispatch(actionCreators.changeBacktopMouseLeave());
    },
    changeCurrentToHome(){
        dispatch(headerActionCreators.changeCurrent('home'));
    }
});

export default connect(mapState,mapDispatch)(Home);

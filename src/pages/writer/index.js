import React, {Fragment,Component} from 'react';
import Header from '../../common/header';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import WriterDetail from './components/WriterDetail';
import {WriterWrapper} from './style';
import {actionCreators as headerActionCreators} from '../../common/header/store';

class Writer extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.handleGetWriterInfo();
        this.props.changeCurrentToWriter();
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <WriterWrapper>
                    <img className="banner-pic" src={this.props.bannerPic} alt=""/>
                    <WriterDetail></WriterDetail>
                </WriterWrapper>
            </Fragment>
        )
    }
}

const mapState = (state) => ({
    bannerPic:state.getIn(['writer','bannerPic']),
    writerList:state.getIn(['writer','writerList'])
});

const mapDispatch = (dispatch) => ({
    handleGetWriterInfo(){
        dispatch(actionCreators.getWriterInfo())
    },
    changeCurrentToWriter(){
        dispatch(headerActionCreators.changeCurrent('writer'));
    }
});

export default connect(mapState,mapDispatch)(Writer);

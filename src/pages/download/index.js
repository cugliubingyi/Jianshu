import React,{Component} from 'react';
import Header from '../../common/header';
import {DownloadContent} from './style';
import {connect} from 'react-redux';
import {actionCreators as headerActionCreators} from "../../common/header/store";

class Download extends Component{
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.changeCurrentToDownload();
    }

    render(){
        return(
            <div>
                <Header/>
                <DownloadContent/>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    changeCurrentToDownload(){
        dispatch(headerActionCreators.changeCurrent('download'));
    }
});

export default connect(null,mapDispatch)(Download);

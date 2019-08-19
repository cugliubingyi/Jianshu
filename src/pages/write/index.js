import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {actionCreators as headerActionCreators} from '../../common/header/store';

class Write extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(loginStatus){
            return(
                <div>写文章页面</div>
            )
        }else{
            return <Redirect to='/login' />
        }
    }
    componentDidMount(){
        this.props.changeCurrentToWrite();
    }
}

const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
    changeCurrentToWrite(){
        dispatch(headerActionCreators.changeCurrent('write'));
    }
});

export default connect(mapState,mapDispatch)(Write);

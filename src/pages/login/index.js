import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {actionCreators} from './store';
import {actionCreators as headerActionCreators} from '../../common/header/store';

class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' innerRef={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/' />
        }
    }
    componentDidMount(){
        this.props.changeCurrentToLogin();
    }
}

const mapState = (state) => ({
    loginStatus:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        dispatch(headerActionCreators.userMouseLeave());
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
        localStorage.login = 'login';
        localStorage.account = accountElem.value;
        localStorage.password = passwordElem.value;
    },
    changeCurrentToLogin(){
        dispatch(headerActionCreators.changeCurrent('login'));
    }
});

export default connect(mapState,mapDispatch)(Login);

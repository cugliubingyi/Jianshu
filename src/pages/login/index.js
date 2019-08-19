import React,{PureComponent} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {LoginWrapper,Logo,LoginBox,LoginForm,InputWrapper,InputAccount,InputPwd,SubmitBtn,RememberBtn,ForgetBtn,FormInfo,MoreSign,MoreItems,MoreItem,Tabs,TabItem,TabPoint} from './style';
import {actionCreators} from './store';
import {actionCreators as headerActionCreators} from '../../common/header/store';
import {Link} from 'react-router-dom';

class Login extends PureComponent{
    getLoginContent(){
        const {loginTab,changeLoginTabToLogin,changeLoginTabToRegister} = this.props;
        return(
            <LoginBox>
                <Tabs>
                    <TabItem className={loginTab==="login"?"active":""} onClick={changeLoginTabToLogin}>登录</TabItem>
                    <TabPoint></TabPoint>
                    <TabItem className={loginTab==="register"?"active":""} onClick={changeLoginTabToRegister}>注册</TabItem>
                </Tabs>
                <LoginForm>
                    <InputWrapper>
                        <InputAccount placeholder='手机号或邮箱' name="session[email_or_mobile_number]" id="session_email_or_mobile_number" innerRef={(input) => {this.account = input}}/>
                        <i className="iconfont icon-wode"></i>
                    </InputWrapper>
                    <InputWrapper>
                        <InputPwd placeholder='密码' type='password' name="session[password]" id="session_password" innerRef={(input) => {this.password = input}}/>
                        <i className="iconfont icon-mima"></i>
                    </InputWrapper>
                    <FormInfo>
                        <RememberBtn>
                            <input type="checkbox" value="true" name="session[remember_me]" id="session_remember_me"/>
                            <span className="remember-text">记住我</span>
                        </RememberBtn>
                        <ForgetBtn>登录遇到问题？</ForgetBtn>
                    </FormInfo>
                    <SubmitBtn onClick={() => this.props.login(this.account,this.password)}>登录</SubmitBtn>
                </LoginForm>
                <MoreSign>
                    <h6 className="sign-title">社交账号登录</h6>
                    <MoreItems>
                        <MoreItem>
                            <i className="iconfont icon-weibo"></i>
                        </MoreItem>
                        <MoreItem>
                            <i className="iconfont icon-weixin"></i>
                        </MoreItem>
                        <MoreItem>
                            <i className="iconfont icon-qq"></i>
                        </MoreItem>
                        <MoreItem>
                            <span className="rest">其他</span>
                        </MoreItem>
                    </MoreItems>
                </MoreSign>
            </LoginBox>
        )
    }

    getRegisterContent(){
        const {loginTab,changeLoginTabToLogin,changeLoginTabToRegister} = this.props;
        return(
            <LoginBox>
                <Tabs>
                    <TabItem className={loginTab==="login"?"active":""} onClick={changeLoginTabToLogin}>登录</TabItem>
                    <TabPoint></TabPoint>
                    <TabItem className={loginTab==="register"?"active":""} onClick={changeLoginTabToRegister}>注册</TabItem>
                </Tabs>
                <LoginForm>
                    <InputWrapper>
                        <InputAccount placeholder='你的昵称' name="user[nickname]" id="user_nickname" innerRef={(input) => {this.account = input}}/>
                        <i className="iconfont icon-wode"></i>
                    </InputWrapper>
                    <InputWrapper>
                        <InputAccount className="phonenumber" placeholder='手机号' name="user[mobile_number]" id="user_mobile_number" innerRef={(input) => {this.phonenumber = input}}/>
                        <i className="iconfont icon-shouji"></i>
                    </InputWrapper>
                    <InputWrapper>
                        <InputPwd placeholder='设置密码' type='password' name="user[password]" id="user_password" innerRef={(input) => {this.password = input}}/>
                        <i className="iconfont icon-mima"></i>
                    </InputWrapper>
                    <SubmitBtn className="register-submit-btn" onClick={() => this.props.login(this.account,this.password)}>注册</SubmitBtn>
                </LoginForm>
                <MoreSign>
                    <h6 className="sign-title">社交账号注册</h6>
                    <MoreItems>
                        <MoreItem>
                        </MoreItem>
                        <MoreItem>
                            <i className="iconfont icon-weixin"></i>
                        </MoreItem>
                        <MoreItem>
                            <i className="iconfont icon-qq"></i>
                        </MoreItem>
                        <MoreItem>
                        </MoreItem>
                    </MoreItems>
                </MoreSign>
            </LoginBox>
        )
    }

    render(){
        const {loginStatus,loginTab} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    {
                        loginTab==="login"?
                            this.getLoginContent()
                            :this.getRegisterContent()
                    }
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
    loginStatus:state.getIn(['login','login']),
    loginTab:state.getIn(['login','loginTab'])
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
    },
    changeLoginTabToLogin(){
        dispatch(actionCreators.changeLoginTab('login'));
    },
    changeLoginTabToRegister(){
        dispatch(actionCreators.changeLoginTab('register'));
    }
});

export default connect(mapState,mapDispatch)(Login);

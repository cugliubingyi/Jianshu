import styled from 'styled-components';
import LogoPic from '../../statics/logo.png';

export const LoginWrapper = styled.div`
  z-index:0;
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:0;
  background:#eee;
`;

export const Logo = styled.div`
  position:absolute;
  left:40px;
  top:40px;
  width:200px;
  height:100px;
  background:url(${LogoPic});
  background-size:cover;
`;

export const LoginBox = styled.div`
  width:400px;
  margin:100px auto;
  padding:50px 50px 30px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.1);
  border-radius:4px;
`;

export const Tabs = styled.div`
  width:300px;
  height:40px;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const TabItem = styled.div`
  width:56px;
  height:40px;
  box-sizing:border-box;
  text-align:center;
  line-height:40px;
  font-size:18px;
  color:#969696;
  cursor:pointer;
  &.active{
    color:#ea6f5a;
    border-bottom:2px solid #ea6a5a;
  }
  :hover{
    border-bottom:2px solid #ea6a5a;
  }
`;

export const TabPoint = styled.div`
  width:2px;
  height:2px;
  background:#777;
  margin:0 10px;
`;

export const LoginForm = styled.form.attrs({
  action:'GET'
})`
  margin-top:50px;
`;
export const InputWrapper = styled.div`
  position:relative;
  .iconfont{
    position:absolute;
    top: 14px;
    left: 10px;
    font-size: 18px;
    color: #969696;
  }
`;

export const InputAccount = styled.input`
  display:block;
  width:300px;
  height:50px;
  line-height:50px;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
  padding:4px 12px 4px 35px;
  margin:0 auto;
  color:#777;
  border:1px solid #c8c8c8;
  box-sizing:border-box;
  outline:none;
  background:#eee;
  &.phonenumber{
    border-top-left-radius:0;
    border-top-right-radius:0;
    border-top:none;
  }
`;

export const InputPwd = styled.input`
  display:block;
  width:300px;
  height:50px;
  line-height:50px;
  border-bottom-left-radius:4px;
  border-bottom-right-radius:4px;
  padding:4px 12px 4px 35px;
  margin:0 auto;
  color:#777;
  border:1px solid #c8c8c8;
  border-top:none;
  box-sizing:border-box;
  outline:none;
  background:#eee;
`;

export const FormInfo = styled.div`
  overflow:hidden;
  margin-top:20px;
`;

export const RememberBtn = styled.div`
  float:left;
  .remember-text{
    font-size:15px;
    color:#969696;
    margin-left:5px;
  }
`;

export const ForgetBtn = styled.a`
  display:block;
  float:right;
  font-size:14px;
  color:#999999;
  :hover{
    color:#000;
  }
`;

export const SubmitBtn = styled.div`
  width:300px;
  height:44px;
  line-height:44px;
  color:#fff;
  background:#3194d0;
  border-radius:22px;
  margin:20px auto 0;
  text-align:center;
  cursor:pointer;
  &.register-submit-btn{
    background:#42c02e;
  }
`;

export const MoreSign = styled.div`
  width:300px;
  padding:0 50px;
  margin-top:50px;
  .sign-title{
    text-align:center;
    color:#b5b5b5;
    font-size:12px;
    position:relative;
    ::before{
      content:'';
      display:block;
      position:absolute;
      left:0;
      top:50%;
      width:20%;
      height:1px;
      background:#000;
    }
    ::after{
      content:'';
      display:block;
      position:absolute;
      right:0;
      top:50%;
      width:20%;
      height:1px;
      background:#777;
    }
  }
`;

export const MoreItems = styled.ul`
  margin-top:10px;
  width:100%;
  height:50px;
  display:flex;
`;

export const MoreItem = styled.li`
  display:block;
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  .iconfont{
    font-size:28px;
    &.icon-weibo{
      color:#E05244;
    }
    &.icon-weixin{
      color:#00BB29;
    }
    &.icon-qq{
      color:#498AD5;
    }
  }
  .rest{
    color:#777;
    font-size:12px;
  }
`;

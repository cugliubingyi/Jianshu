import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index:1;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:56px;
    background:#fff;
    border-bottom:1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:55px;
    background-image:url(${logoPic});
    background-color:#fff;
    background-size:contain;
    z-index:2;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    position:absolute;
    left:50%;
    top:0;
    margin-left:-480px;
    padding-right:70px;
    box-sizing:border-box;
    z-index:1;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    cursor:pointer;
    &.left{
        float:left;
    }
    &.gray:hover{
        background:#f3f5f7;
    }
    &.msg{
        position:relative;
    }
    &.right{
        float:right;
        color:#969696;
        .diamond-img{
            width:50px;
            height:20px;
            margin-top:-6px;
        }
    }
    &.user{
        display:flex;
        height:100%;
        align-items:center;
        position:relative;
        .user-img{
            width:40px;
            height:40px;
            border-radius:20px;
        }
        .user-arrow{
            width:0;
            height:0;
            border-top:8px solid #969696;
            border-left:6px solid transparent;
            border-right:6px solid transparent;
            margin-left:6px;
        }
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const NavUserInfo = styled.ul`
    position:absolute;
    top:56px;
    left:0;
    width: 158px;
    border-radius: 0 0 4px 4px;
    padding:4px 0;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`;

export const NavUserInfoItem = styled.li`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    :hover{
        background:#f3f5f7;
    }
    .iconfont{
        color:#ec6149;
        font-size:20px;
        font-weight:bold;
        margin-left:20px;
    }
    .msg-content{
        color:#000;
        margin-left:12px;
        margin-top:-4px;
    }
`;

export const NavMsgInfo = styled.ul`
    position:absolute;
    top:56px;
    left:0;
    width: 200px;
    border-radius: 0 0 4px 4px;
    padding:4px 0;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
    z-index:2;
`;

export const NavMsgInfoItem = styled.li`
    width:100%;
    height:50px;
    display:flex;
    align-items:center;
    :hover{
        background:#f3f5f7;
    }
    .iconfont{
        color:#ec6149;
        font-size:20px;
        font-weight:bold;
        margin-left:20px;
    }
    .msg-content{
        color:#000;
        margin-left:20px;
        margin-top:-2px;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
           background:#777;
           color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;    
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:20px;
    top:56px;
    width:240px;
    padding:0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
    ::before{
        content:'';
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #FFF;
        position: absolute;
        left:20px;
        top:-9px;
        z-index:3;
    }
    ::after{
        content:'';
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #eee;
        position: absolute;
        left:20px
        top:-10px;
        z-index:2;
    }
`;

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    float:right;
    font-size;13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow:hidden;
`;

export const SearchInfoItem = styled.a`
    display:block;
    float:left;
    line-height:20px;
    padding:0 5px;
    margin-right:10px;
    margin-bottom:15px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:55px;
    z-index:2;
    background-color:#fff;
`;

export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    border:1px solid #ec6149;
    font-size:14px;
    cursor:pointer;
    &.reg{
        color:#ec6149;  
    }
    &.writing{
        color:#fff;
        background:#ec6149;
    }
`;

export const MaskWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background:rgba(0,0,0,0.5);
    z-index:999;
`;

export const MaskLayer = styled.div`
    width:380px;
    height:425px;
    position:absolute;
    top:30px;
    left:50%;
    margin-left:-190px;
    background:#fff;
    padding:40px 72px 0;
    box-sizing:border-box;
    z-index:1000;
    .mask-title{
        font-size:18px;
        line-height:25px;
        text-align:center;
        .mask-span{
            color:#e9634c;
        }
    }
    .mask-img{
        width:190px;
        height:190px;
        margin-left:23px;
    }
    .mask-desc{
        font-size:14px;
        text-align:center;
    }
`;

export const MaskButton = styled.div`
    background-color: #e9634c;
    color: #fff;
    margin: 25px auto 0;
    width: 190px;
    height: 40px;
    border-radius: 20px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
`;

import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavUserInfo,
    NavUserInfoItem,
    NavMsgInfo,
    NavMsgInfoItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
    MaskWrapper,
    MaskLayer,
    MaskButton
} from './style';
import {Link} from 'react-router-dom';

class Header extends Component{
    getListArea() {
        const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page - 1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(focused || mouseIn){
            return(
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page,totalPage,this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className='iconfont icon-spin spin'></i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }

    getMsgListArea(){
        return this.props.msgList.toJS().map(item => (
            <NavMsgInfoItem key={item.id}>
                <i className={`iconfont ${item.iconName}`}></i>
                <span className="msg-content">{item.content}</span>
            </NavMsgInfoItem>
        ));
    }

    getUserListArea(){
        const {userList,logout} = this.props;
        const newList = userList.toJS();
        let resultList = [];
        for(let i = 0;i < newList.length - 1;i++){
            resultList.push(
                <NavUserInfoItem key={newList[i].id}>
                    <i className={`iconfont ${newList[i].iconName}`}></i>
                    <span className="msg-content">{newList[i].content}</span>
                </NavUserInfoItem>
            )
        }
        const lastItem =
        (<NavUserInfoItem key={newList[newList.length-1].id} onClick={logout}>
            <Link to='/'>
                <i className={`iconfont ${newList[newList.length-1].iconName}`}></i>
                <span className="msg-content">{newList[newList.length-1].content}</span>
            </Link>
        </NavUserInfoItem>);
        resultList = [...resultList,lastItem];
        return resultList;
    }

    componentWillMount(){
        if(localStorage.login === 'login'){
            this.props.handleLogin();
        }else{
            this.props.logout();
        }
    }

    componentDidMount(){
        this.props.handleGetMsgList();
        this.props.handleGetUserList();
    }

    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,userPic,msgMouseIn,maskShow,userMouseIn,handleMsgMouseEnter,handleMsgMouseLeave,handleShowMask,handleHideMask,handleUserMouseEnter,handleUserMouseLeave,current} = this.props;
        return(
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    {
                        login?
                            <Link to="/">
                                <NavItem className={`left ${current==='home'?'active':''}`}>发现</NavItem>
                            </Link>:
                            <Link to="/">
                                <NavItem className={`left ${current==='home'?'active':''}`}>首页</NavItem>
                            </Link>
                    }
                    {
                        login?
                            <Fragment>
                                <Link to="/">
                                    <NavItem className={`left gray ${current==='subscription'?'active':''}`}>关注</NavItem>
                                </Link>
                                <Link to="/">
                                    <NavItem
                                        className={`left gray msg ${current==='notification'?'active':''}`}
                                        onMouseEnter={handleMsgMouseEnter}
                                        onMouseLeave={handleMsgMouseLeave}
                                    >
                                        消息
                                        {
                                            msgMouseIn?
                                                <NavMsgInfo>
                                                    {this.getMsgListArea()}
                                                </NavMsgInfo>:
                                                null
                                        }
                                    </NavItem>
                                </Link>
                            </Fragment>:
                            <Link to="/download">
                                <NavItem className={`left gray ${current==='download'?'active':''}`}>下载App</NavItem>
                            </Link>
                    }
                    {
                        login?
                            <NavItem
                                className='right gray user'
                                onMouseEnter={handleUserMouseEnter}
                                onMouseLeave={handleUserMouseLeave}
                            >
                                <img className="user-img" src={userPic} alt=""/>
                                <div className="user-arrow"></div>
                                {
                                    userMouseIn?
                                        <NavUserInfo>
                                            {this.getUserListArea()}
                                        </NavUserInfo>:
                                        null
                                }
                            </NavItem>:
                            <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                    }
                    <NavItem
                        className='right'
                        onClick={handleShowMask}
                    >
                        <img className="diamond-img" src="https://cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png" alt=""/>
                    </NavItem>
                    <NavItem className='right'>
                        <i className='iconfont icon-Aa'></i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused?'focused iconfont zoom icon-fangdajing':'iconfont zoom icon-fangdajing'}></i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='writing'>
                            <i className='iconfont icon-icon-checkin'></i>
                            写文章
                        </Button>
                    </Link>
                    {
                        login?
                            null:
                            <Link to='/login'>
                                <Button className='reg'>注册</Button>
                            </Link>
                    }
                </Addition>
                {
                    maskShow?
                        <MaskWrapper>
                            <MaskLayer>
                                <h3 className="mask-title">简书钻相关功能目前只能在<span className="mask-span">简书App</span>查看</h3>
                                <img className="mask-img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                                <p className="mask-desc">扫码下载 简书App</p>
                                <MaskButton onClick={handleHideMask}>我知道了</MaskButton>
                            </MaskLayer>
                        </MaskWrapper>
                        :null
                }
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        msgList:state.getIn(['header','msgList']),
        msgMouseIn:state.getIn(['header','msgMouseIn']),
        maskShow:state.getIn(['header','maskShow']),
        login:state.getIn(['login','login']),
        userPic:state.getIn(['login','userPic']),
        userMouseIn:state.getIn(['header','userMouseIn']),
        userList:state.getIn(['header','userList']),
        current:state.getIn(['header','current'])
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        handleGetMsgList(){
            dispatch(actionCreators.getMsgList());
        },
        handleGetUserList(){
            dispatch(actionCreators.getUserList());
        },
        handleInputFocus(list){
            // const action = {
            //     type:'search_focus'
            // }
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            // const action = {
            //     type:'search_blur'
            // };
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleMsgMouseEnter(){
            dispatch(actionCreators.msgMouseEnter());
        },
        handleMsgMouseLeave(){
            dispatch(actionCreators.msgMouseLeave());
        },
        handleUserMouseEnter(){
            dispatch(actionCreators.userMouseEnter());
        },
        handleUserMouseLeave(){
            dispatch(actionCreators.userMouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },
        handleShowMask(){
            dispatch(actionCreators.showMask());
        },
        handleHideMask(){
            dispatch(actionCreators.hideMask());
        },
        logout(){
            localStorage.login = 'logout';
            localStorage.account = '';
            localStorage.password = '';
            dispatch(loginActionCreators.logout());
        },
        handleLogin(){
            dispatch(loginActionCreators.login(localStorage.account,localStorage.password));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);

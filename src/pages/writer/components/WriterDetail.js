import React, { Component } from 'react';
import {connect} from 'react-redux';
import {WriterList,WriterItem,WriterButton,LoadMore} from '../style';
import {withRouter} from 'react-router-dom';
import {actionCreators} from '../store';

class WriterDetail extends Component {
    getWriterSex(sex){
        switch(sex){
            case "male":
                return (<i className="iconfont icon-nan"></i>);
            case "female":
                return (<i className="iconfont icon-nv"></i>);
            default:
                return null;
        }
    }

    getWriterArea(){
        const {writerList,handleWriterAttentionClick,login,history} = this.props;
        return writerList.map((item,index) => (
            <WriterItem key={item.get('id')}>
                <img className="writer-pic" src={item.get('writerPic')} alt=""/>
                <h4 className="writer-name">
                    {item.get('writerName')}
                    {
                        this.getWriterSex(item.get('writerSex'))
                    }
                </h4>
                <p className="writer-desc">{item.get('writerDesc')}</p>
                <WriterButton
                    className={item.get('writerAttention')?"active":""}
                    onClick={() => handleWriterAttentionClick(item.get('writerAttention'),index,login,history)}
                >
                    {/*<i className="iconfont icon-jia"></i>关注*/}
                    {item.get('writerAttention')?<div className="content"><i className="iconfont icon-gou"></i>已关注</div>:<div className="content"><i className="iconfont icon-jia"></i>关注</div>}
                    {item.get('writerAttention')?<div className="cancel"><i className="iconfont icon-cha"></i>取消关注</div>:null}
                </WriterButton>
                <div className="writer-divide">
                    <div className="writer-recent">最近更新</div>
                    <hr className="writer-line"/>
                </div>
                <ul className="recent-list">
                    {item.get('writerRecent').toJS().map((i) => (
                        <li key={i.id} className="recent-item">{i.content}</li>
                    ))}
                </ul>
            </WriterItem>
        ))
    }

    render() {
        const {page,getMoreList,writerList} = this.props;
        return (
            <div>
                <WriterList>
                    {this.getWriterArea()}
                </WriterList>
                {writerList.toJS().length?<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>:null}
            </div>
        );
    }
}

const mapState = (state) => ({
    writerList:state.getIn(['writer','writerList']),
    page:state.getIn(['writer','writerPage']),
    login:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
    handleWriterAttentionClick(attention,index,login,history){
        if(!login){
            history.push('/login');
            return;
        }
        dispatch(actionCreators.changeWriterDetailAttention(!attention,index));
    },
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
});

export default withRouter(connect(mapState,mapDispatch)(WriterDetail));

import React,{PureComponent} from 'react';
import {
    WriterWrapper,
    WriterHeader,
    WriterList,
    WriterTitle,
    WriterSwitch,
    WriterItem,
    WriterInfo,
    WriterAttention,
    WriterImg,
    WriterUserMsg,
    WriterMore
} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
// import {actionCreators as loginActionCreators} from '../../login/store';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Writer extends PureComponent{
    getWriterList(){
        const {list,page,handleAttentionClick,login,history} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length){
            for(let i = (page - 1)*5; i < page*5; i++){
                pageList.push(
                    <WriterItem key={newList[i].id}>
                        <WriterInfo>
                            <WriterImg imgUrl={newList[i].imgUrl}></WriterImg>
                            <WriterUserMsg>
                                <h3 className="writer-username">{newList[i].userName}</h3>
                                <p className="writer-msg">{`写了${newList[i].wordCount}字 · ${newList[i].like}喜欢`}</p>
                            </WriterUserMsg>
                        </WriterInfo>
                        <WriterAttention
                            className={newList[i].attention?"active":""}
                            onClick={() => handleAttentionClick(newList[i].attention,i,login,history)}
                        >
                            {/*{newList[i].attention?"已关注":"+关注"}*/}
                            {newList[i].attention?<div className="content"><i className="iconfont icon-gou"></i>已关注</div>:<div className="content"><i className="iconfont icon-jia"></i>关注</div>}
                            {newList[i].attention?<div className="cancel"><i className="iconfont icon-cha"></i>取消关注</div>:null}
                        </WriterAttention>
                    </WriterItem>
                )
            }
        }
        return pageList;
    }

    render(){
        const {page,totalPage,handleChangePage} = this.props;
        return(
            <WriterWrapper>
                <WriterHeader>
                    <WriterTitle>推荐作者</WriterTitle>
                    <WriterSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                        <i ref={(icon) => {this.spinIcon = icon}} className='iconfont icon-spin spin'></i>
                        换一批
                    </WriterSwitch>
                </WriterHeader>
                <WriterList>
                    {this.getWriterList()}
                </WriterList>
                <Link to='/writer' style={{textDecoration:'none'}}>
                    <WriterMore>查看全部 <i className="iconfont icon-xiangzuojiantou_right"></i></WriterMore>
                </Link>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','writerList']),
    page: state.getIn(['home','writerPage']),
    totalPage: state.getIn(['home','writerTotalPage']),
    login:state.getIn(['login','login'])
});

const mapDispatch = (dispatch) => ({
    handleChangePage(page,totalPage,spin){
        console.log(spin);
        let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
        if(originAngle){
            originAngle = parseInt(originAngle, 10);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

        if(page < totalPage){
            dispatch(actionCreators.changeWriterList(page + 1));
        }else{
            dispatch(actionCreators.changeWriterList(1));
        }
    },
    handleAttentionClick(attention,index,login,history){
        if(!login){
            history.push('/login');
            return;
        }
        dispatch(actionCreators.changeWriterAttention(!attention,index));
    }
});

export default withRouter(connect(mapState,mapDispatch)(Writer));

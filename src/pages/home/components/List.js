import React,{PureComponent} from 'react';
import {ListItem,ListInfo,LoadMore,ListMsg,ListMsgItem} from '../style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends PureComponent{
    render(){
        const {list,getMoreList,page} = this.props;
        return(
            <div>
                {
                    list.map((item,index) => (
                        <Link key={index} to={'/detail/' + item.get('id')}>
                            <ListItem>
                                {
                                    item.get('imgUrl')?
                                        <img className="pic" src={item.get('imgUrl')} alt=""/>
                                        :null
                                }
                                <ListInfo className={item.get('imgUrl')?"":"no-pic"}>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                    <ListMsg>
                                        <ListMsgItem className="meta">
                                            <i className="iconfont icon-zuanshi"></i>
                                            {item.get('meta')}
                                        </ListMsgItem>
                                        <ListMsgItem>
                                            {item.get('name')}
                                        </ListMsgItem>
                                        <ListMsgItem>
                                            <i className="iconfont icon-pinglun2"></i>
                                            {item.get('comment')}
                                        </ListMsgItem>
                                        <ListMsgItem>
                                            <i className="iconfont icon-shoucang1"></i>
                                            {item.get('like')}
                                        </ListMsgItem>
                                        {
                                            item.get('shang')?
                                                <ListMsgItem>
                                                    <i className="iconfont icon-shoucang"></i>
                                                    {item.get('shang')}
                                                </ListMsgItem>
                                                :null
                                        }
                                    </ListMsg>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                {list.toJS().length?<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>:null}
            </div>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});

const mapDispatch = (dispatch) => ({
    getMoreList(page){
        dispatch(actionCreators.getMoreList(page));
    }
});

export default connect(mapState,mapDispatch)(List);

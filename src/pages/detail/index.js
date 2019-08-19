import React,{Fragment,PureComponent} from 'react';
import Header from '../../common/header';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {DetailWrapper,DHeader,Content} from './style';
import {actionCreators} from './store';
import {actionCreators as headerActionCreators} from '../../common/header/store';

class Detail extends PureComponent{
    render(){
        const {title,content} = this.props;
        return(
            <Fragment>
                <Header/>
                <DetailWrapper>
                    <DHeader>{title}</DHeader>
                    <Content dangerouslySetInnerHTML={{__html:content}} />
                </DetailWrapper>
            </Fragment>

        )
    }
    componentDidMount(){
        window.scrollTo(0,0);
        this.props.getDetail(this.props.match.params.id);
        this.props.changeCurrentToDetail();
    }
}

const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});

const mapDispatch = (dispatch) => ({
    getDetail(id){
        dispatch(actionCreators.getDetail(id));
    },
    changeCurrentToDetail(){
        dispatch(headerActionCreators.changeCurrent('detail'));
    }
});

export default connect(mapState,mapDispatch)(withRouter(Detail));

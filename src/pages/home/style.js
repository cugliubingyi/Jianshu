import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin:0 auto;
  margin-top:56px;
`;

export const HomeLeft = styled.div`
  margin-left:15px;
  padding-top:30px;
  width:625px;
  float:left;
`;

export const HomeRight = styled.div`
  width:280px;
  float:right;
`;

export const CarouselWrapper = styled.div`
  position:relative;
  width:625px;
  height:270px;
  border-radius:6px;
  overflow:hidden;
  .slider-img{
    width:625px;
    height:270px;
  }
`;

export const CarouselPrev = styled.div`
  position:absolute;
  left:0;
  top:50%;
  margin-top:-25px;
  width:40px;
  height:50px;
  line-height:50px;
  text-align:center;
  border-top-right-radius:6px;
  border-bottom-right-radius:6px;
  background:rgba(0,0,0,0.5);
  cursor:pointer;
  .iconfont{
    font-size:20px;
    color:#fff;
  }
`;

export const CarouselNext = styled.div`
  position:absolute;
  right:0;
  top:50%;
  margin-top:-25px;
  width:40px;
  height:50px;
  line-height:50px;
  text-align:center;
  border-top-left-radius:6px;
  border-bottom-left-radius:6px;
  background:rgba(0,0,0,0.5);
  cursor:pointer;
  .iconfont{
    font-size:20px;
    color:#fff;
  }
`;

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding:20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float:left;
  height:32px;
  line-height:32px;
  margin-left:18px;
  margin-bottom:18px;
  padding-right:10px;
  background:#f7f7f7;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;  
    margin-right:10px;
  }
`;

export const ListItem = styled.div`
  overflow:hidden;
  padding-top:20px;
  border-bottom:1px solid #dcdcdc;
  .pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`;

export const ListInfo = styled.div`
  overflow:hidden;
  width:500px;
  float:left;
  &.no-pic{
    width:625px;
  }
  .title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color:#999;
  }
`;

export const ListMsg = styled.ul`
  float:left;
`;

export const ListMsgItem = styled.li`
  float:left;
  margin-right:10px;
  color:#B4B4B4;
  font-size:12px;
  &.meta{
    color:#EA6F5A;
  }
`;

export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:280px;
`;

export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
  margin-bottom:6px;
`;

export const WriterWrapper = styled.div`
	width: 280px;
`;

export const WriterHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const WriterList = styled.div`
    width: 100%;
`;

export const WriterTitle = styled.div`
    font-size: 14px;
    color: #969696;
`;

export const WriterSwitch = styled.div`
    font-size: 14px;
    color: #969696;
    cursor: pointer;
    .spin{
        display:block;
        float:left;
        margin-right: 6px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`;

export const WriterItem = styled.div`
    width: 100%;
    height: 48px;
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
`;

export const WriterInfo = styled.div`
    float: left;
    height: 48px;
`;

export const WriterAttention = styled.div`
    position: absolute;
    right: 0;
    top: 4px;
    font-size: 13px;
    color: #48C035;
    width: 100px;
    height: 20px;
    line-height: 20px;
    text-align: right;
    cursor: pointer;
    &.active{
        color: #969696;
        :hover{
            .cancel{
                display: block;
                .iconfont{
                    margin-right:-6px;
                }
            }
            .content{
                display: none;
            }
        }
    }
    .content{
        display: block;
    }
    .cancel{
        display: none;
        position: relative;
        right: 0;
        top: 0;
    }
`;

export const WriterImg = styled.div`
    float: left;
    margin-right: 12px;
    width: 48px;
    height: 48px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    border-radius: 24px;
`;

export const WriterUserMsg = styled.div`
    float: left;
    height: 100%;
    .writer-username{
        color: #333;
        font-size: 14px;
        margin-top: 4px;
        margin-bottom: 4px;
        line-height: 20px;
        text-align: left;
    }
    .writer-msg{
        color: #969696;
        font-size: 12px;
        line-height:16px;
    }
`;

export const WriterMore = styled.div`
    width: 280px;
    height: 35px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    line-height: 35px;
    box-sizing: border-box;
    .iconfont{
        font-weight:bold;
    }
`;

export const QuickMarkWrapper = styled.div`
    position: relative;
    width: 280px;
    height: 82px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    margin-bottom: 30px;
    display:flex;
    align-items:center;
    cursor:pointer;
    box-sizing:border-box;
    .quick-mark-img{
        width:60px;
        height:60px;
        margin-left:24px;
    }
`;

export const QuickMarkPic = styled.div`
    position:absolute;
    width:180px;
    height:180px;
    top:-192px;
    left:50%;
    margin-left:-90px;
    border:1px solid #999;
    border-radius:6px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
    ::before{
        content:'';
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #FFF;
        position: absolute;
        left:50%;
        margin-left:-10px;
        bottom:-9px;
        z-index:3;
    }
    ::after{
        content:'';
        display: block;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #999;
        position: absolute;
        left:50%;
        margin-left:-10px;
        bottom:-10px;
        z-index:2;
    }
`;

export const QuickMarkInfo = styled.div`
    margin-left:10px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    .quick-mark-title{
        text-align:left;
        color:#333;
        font-size:15px;
        margin:0;
        .iconfont{
            font-weight:bold;
        }
    }
    .quick-mark-desc{
        text-align:left;
        color:#999;
        font-size:13px;
        margin:0;
    }
`;

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    margin:30px 0;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor:pointer;
`;

export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;
    cursor:pointer;
    background:#fff;
    :hover{
        background:#f7f7f7;
    }
    .backtop-desc{
        position:absolute;
        left:-100px;
        top:50%;
        margin-top:-15px;
        width:80px;
        height:30px;
        line-height:30px;
        text-align:center;
        color:#fff;
        border-radius:6px;
        background:rgba(0,0,0,0.8);
        ::after{
            content:'';
            display:block;
            width:0;
            height:0;
            border-left:6px solid rgba(0,0,0,0.8);
            border-top:6px solid transparent;
            border-bottom:6px solid transparent;
            position:absolute;
            left:80px;
            top:50%;
            margin-top:-6px;
        }
        &.mousein{
            opacity:1;
        }
        &.fade-enter{
            transition:all .2s ease-out;
        },
        &.fade-enter-active{
            opacity:1;
        },
        &.fade-exit{
            transition:all .2s ease-out;
        },
        &.fade-exit-active{
            opacity:0;
        }
    }
`;

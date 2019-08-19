import styled from 'styled-components';

export const WriterWrapper = styled.div`
  width:960px;
  margin:0 auto;
  margin-top:56px;
  .banner-pic{
    width:100%;
    height:100px;
    margin-top:30px;
  }
`;

export const WriterList = styled.ul`
  width:100%;
  overflow:hidden;
`;

export const WriterItem = styled.li`
  position:relative;
  float:left;
  width:300px;
  height:320px;
  box-sizing:border-box;
  margin-right:30px;
  margin-top: 80px;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  background-color: hsla(0,0%,71%,.1);
  :nth-of-type(3n){
    margin-right:0;
  }
  ::after{
    content:'';
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .writer-pic{
    position:absolute;
    left:50%;
    top:-40px;
    margin-left:-40px;
    width:80px;
    height:80px;
    border-radius:50%;
    border: 1px solid #ddd;
    background-color: #fff;
  }
  .writer-name{
    font-size: 21px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:center;
    margin-top:60px;
    margin-bottom:10px;
    color:#333;
    .icon-nan{
      font-size:21px;
      vertical-align:middle;
      color: #3194d0;
      margin-left:6px;
    }
    .icon-nv{
      font-size:21px;
      vertical-align:middle;
      color: #ea6f5a;
      margin-left:6px;
    }
  }
  .writer-desc{
    margin: 0 auto 10px;
    max-width: 180px;
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal!important;
    word-wrap:break-word;
    color:#333;
  }
  .writer-divide{
    width:260px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:absolute;
    bottom:80px;
    .writer-recent{
      margin-right:10px;
      color:#969696;
      font-size:12px;
    }
    .writer-line{
      flex:1;
      background-color:#e6e6e6;
      height:2px;
      border:none;
    }
  }
  .recent-list{
    position:absolute;
    left:50%;
    margin-left:-120px;
    bottom:10px;
    .recent-item{
      width:240px;
      text-align:center;
      color:#333;
      font-size:13px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;
    }
  }
`;

export const WriterButton = styled.div`
  position:absolute;
  top:160px;
  left:50%;
  margin-left:-50px;
  width:100px;
  height:40px;
  box-sizing:border-box;
  border-radius:20px;
  text-align:center;
  line-height:40px;
  color:#fff;
  background:#42c02e;
  cursor:pointer;
  overflow:hidden;
  :hover{
    background:#3db922;
  }
  &.active{
    border:1px solid hsla(0,0%,59%,.6);
    background-color: hsla(0,0%,71%,.1);
    color:#8c8c8c;
    :hover{
      .cancel{
        display: block;
        background:#ddd;
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

export const LoadMore = styled.a`
  display:block;
  width: 38.2%;
  height: 40px;
  line-height:40px;
  margin: 25px auto 40px;
  font-size: 15px;
  border-radius: 20px;
  background-color: #a5a5a5;
  border: none;
  color: #fff;
  text-align: center;
  :hover{
    background-color: #9b9b9b;
    color: #fff;
  }
`;

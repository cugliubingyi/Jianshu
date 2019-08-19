import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'antd';
import {CarouselPrev, CarouselNext, CarouselWrapper} from '../style';
import {actionCreators} from '../store';

class Slider extends Component{
    getSliderList(){
        const {sliderList} = this.props;
        const newList = sliderList.toJS();
        let sliders = [];
        if(newList.length){
            sliders = newList.map((item) => (
                <div key={item.id}><img className="slider-img" src={item.imgUrl} alt=""/></div>
            ))
        }
        return sliders;
    }

    render(){
        const sliderOptions = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return(
            <div>
                <CarouselWrapper
                    onMouseEnter={this.props.handleSliderMouseEnter}
                    onMouseLeave={this.props.handleSliderMouseLeave}
                >
                    <Carousel {...sliderOptions} ref={el => this.carousel = el}>
                        {this.getSliderList()}
                    </Carousel>
                    {
                        this.props.sliderMouseIn?
                            <CarouselPrev onClick={() => {this.carousel&&this.carousel.prev();}}>
                                <i className="iconfont icon-arrow_left"></i>
                            </CarouselPrev>
                            :null
                    }
                    {
                        this.props.sliderMouseIn?
                            <CarouselNext onClick={() => {this.carousel&&this.carousel.next();}}>
                                <i className="iconfont icon-xiangzuojiantou_right"></i>
                            </CarouselNext>:
                            null
                    }
                </CarouselWrapper>
            </div>
        )
    }
}

const mapState = (state) => ({
    sliderList:state.getIn(['home','sliderList']),
    sliderMouseIn:state.getIn(['home','sliderMouseIn'])
});

const mapDispatch = (dispatch) => ({
    handleSliderMouseEnter(){
        dispatch(actionCreators.changeSliderMouseEnter());
    },
    handleSliderMouseLeave(){
        dispatch(actionCreators.changeSliderMouseLeave());
    }
});

export default connect(mapState,mapDispatch)(Slider);

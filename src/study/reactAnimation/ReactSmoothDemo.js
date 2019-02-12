import React, { Component } from 'react';
import Animate from 'react-smooth';
import '../../style/reactAnimate/reactSmooth.scss';

class ReactSmoothDemo extends Component{

    constructor(props){
        super(props);
        this.state = {
            start: false,
        }
    }

    toStart = () => {
        this.setState({start:!this.state.start})
    }
    render(){
        // 不好用，难怪星星那么少，canBegin不能喝begin一起用。前者会覆盖后者。
        const durationTime = 3000;
        const { start } = this.state;
        const translation = [
            {
                style:{
                    transform:'translate(0px)',
                },
                duration:0,
            },
            {
                style:{
                    transform:'translate(300px)',
                },
                duration:durationTime,
            },
            {
                style:{
                    transform:'translate(0px)',
                },
                duration:durationTime,
            },
        ]
        const scale = [
            {
                style:{
                    transform:'scale(1,1)',
                },
                duration:0,
            },
            {
                style:{
                    transform:'scale(3,1)',
                },
                duration:durationTime,
            },
            {
                style:{
                    transform:'scale(1,1)',
                },
                duration:durationTime,
            }
        ]
        const rotate = [
            {
                style:{
                    transform:'rotate(0deg)',
                },
                duration:0,
            },
            {
                style:{
                    transform:'rotate(405deg)',
                },
                duration:durationTime,
            },
            {
                style:{
                    transform:'rotate(0deg)',
                },
                duration:durationTime,
            }
        ]
        const skew = [
            {
                style:{
                    transform:'skew(0,0)',
                },
                duration:0,
            },
            {
                style:{
                    transform:'skew(45deg)',
                },
                duration:durationTime,
            },
            {
                style:{
                    transform:'skew(0,0)',
                },
                duration:durationTime,
            }
        ]
        return(
            <div className='reactSmooth'>
                <h4>平移</h4>
                <Animate steps={translation} canBegin={start} easing='ease-in-out' begin={100} onAnimationEnd={this.toStart}>
                    <div className='menuItem1'/>
                </Animate>
                <Animate steps={translation}  easing='ease' begin={200}>
                    <div className='menuItem1'/>
                </Animate>
                <Animate steps={translation} easing='ease-out' begin={400}>
                    <div className='menuItem1'/>
                </Animate>
                <Animate steps={translation}  easing='linear' begin={600}>
                    <div className='menuItem1'/>
                </Animate>
                <h4>缩放</h4>
                <Animate steps={scale} canBegin={start} easing='linear'>
                    <div className='menuItem2'/>
                </Animate>
                <h4>旋转</h4>
                <Animate steps={rotate} canBegin={start} easing='ease'>
                    <div className='baseMenu'/>
                </Animate>
                <h4>拉伸</h4>
                <Animate steps={skew} canBegin={start} easing='ease-out'>
                    <div className='menuItem3'/>
                </Animate>
                <div>
                    <button onClick={this.toStart}>开始</button>
                </div>
            </div>
        )
    }
}

export default ReactSmoothDemo;
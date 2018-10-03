import React, { Component } from 'react';
import '../../style/analysisComponent/analysisStyle.scss';

/*、
* react 事件系统
*   1.事件原理
*   2.绑定方式
*   3.原生事件
*   */
class ComponentAndEvent extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"事件",
        }
    }
    // 1.bind
    handleBind(e,value){
        console.log('handleBind',e,value);
    }

    // 2.arrow
    handleArrow = (e,value) => {
        console.log('handleArrow',e,value);
    }

    // 外层
    onClickFather = () => {
        console.log(1);
    }

    // 内层1
    onClickSon = () => {
        console.log(2);
    }

    // 内层2
    onClickGrandson = (e) => {
        console.log(3);
        e.stopPropagation();

    }

    componentDidMount(){
        let isCatch = false;
        // 是否是在事件分发阶段进行捕获处理，false代表冒泡阶段处理，true代表分发阶段处理
        this.refs.grandson.addEventListener('click',e => {
            console.log('grandson');
            e.stopPropagation();
        },isCatch)
        this.refs.son.addEventListener('click',e => {
            console.log('son');
        },isCatch)
        this.refs.father.addEventListener('click',e => {
            console.log('father');
        },isCatch)
    }


    render(){

        return (
            <div className='analysisStyle'>
                <button className='btnStyle' className='btnStyle' onClick={this.handleBind.bind(this,'ddddddd')}>Bind</button>
                <button className='btnStyle' onClick={::this.handleBind}>SimpleBind</button>
                <button className='btnStyle' onClick={this.handleBind}>ErrorBind</button>
                <button className='btnStyle' onClick={this.handleArrow}>=>方式1</button>
                <button className='btnStyle' onClick={(e) => this.handleArrow(e,'ddddddddd')}>=>方式2</button>
                <button className='btnStyle' onClick={this.handleArrow()}>Error=></button>
                <div className='fatherBox' onClick={this.onClickFather}>
                    <div className='sonBox' onClick={this.onClickSon}>
                        <div className='grandsonBox' onClick={this.onClickGrandson}>
                           冒泡
                        </div>
                    </div>
                </div>
                <div className='fatherBox' ref='father'>
                    <div className='sonBox' ref='son'>
                        <div className='grandsonBox' ref='grandson'>
                            冒泡
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default ComponentAndEvent;
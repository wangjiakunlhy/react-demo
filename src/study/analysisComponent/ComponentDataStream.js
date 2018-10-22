import React, { Component } from 'react';
import '../../style/analysisComponent/analysisStyle.scss';

/*
* 组件数据流
*   1.props
* */

class Father extends Component{

    constructor(props){
        super(props);
    }
    state = {
        name:"Father Component",
        isShowChild: true,
        isAdd:false,
    }

    hiddenCom = () => {
        this.setState({isShowChild:!this.state.isShowChild});
    }

    addChild = () =>{
        this.setState({isAdd:!this.state.isAdd});
    }

    render(){
        const { name, isShowChild, isAdd } = this.state;
        console.log('father',this.props);
        return (
            <div>
                <div>{'姓名state:' + name}</div>
                <div>下面是一个子组件：</div>
                <br/>
                {
                  isShowChild &&
                  <Son whoUse={'father component'} hello={'hello word'}>
                    {isAdd && <div>hahahahah</div>}
                  </Son>
                }
                <div>
                    <button onClick={this.hiddenCom}>{isShowChild ? '隐藏' : '显示'}子组件</button>
                    <button onClick={this.addChild}>{!isAdd ? '添加' : '拿掉'}Child</button>
                </div>
            </div>
        )
    }

}

class Son extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Son Component",
            result:100,
        }
    }

    baseNum1 = 100;
    baseNum2 = 1;

    changeBaseNum = () => {
        this.baseNum2++;
        this.setState({result:this.baseNum2*this.baseNum1},()=>{
            console.log(2,this.state.result);// result更新之后调用，打印值是更新后的值
        });// 会触发刷新
        // this.state.result = this.baseNum2*this.baseNum1;// 错误，不会触发刷新
        console.log(1,this.state.result);// setState方法是异步的，会先打印这个，且result值为改变。
    }

    render(){
        const { name, result } = this.state;
        const { hello, whoUse } = this.props;
        return (
            <div className='analysisStyle'>
                <div>{'姓名state:' + name}</div>
                <div>我是Son</div>
                {this.props.children}
                <div>{whoUse}</div>
                <div>{hello}</div>
                <br/>
                <button className='btnStyle' onClick={this.changeBaseNum}>加一</button>
                <div>
                    运算结果：{result}
                </div>
            </div>
        )
    }

}


export default Father;
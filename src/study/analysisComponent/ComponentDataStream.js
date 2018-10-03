import React, { Component } from 'react';

/*
* 组件数据流
*   1.props
* */

class Father extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Father Component",
            isShowChild: true,
            isAdd:false,
        }
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
                <div>{`姓名state: ${name}`}</div>
                <div>{`谁who: father`}</div>
                <div>下面是一个子组件：</div>
                <br/>
                {
                  isShowChild &&
                  <Son whoUse={'father component'}>
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
        }
    }

    render(){
        const { name } = this.state;
        console.log('son',this.props);
        return (
            <div>
                <div>{`姓名state: ${name}`}</div>
                <div>我是Son</div>
                {this.props.children}
            </div>
        )
    }

}


export default Father;
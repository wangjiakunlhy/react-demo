import React, { Component } from 'react';
import CreateReactClass from 'create-react-class';
/*
* 组件概念
*   1.组件的创建方式
*   2.无状态组件
* */

// ES6 现在主流创建组件方式
class ComponentConcept extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:"我是状态机",
        }
    }

    changeText = () => {
        this.setState({text:'我变了'},()=>{
            console.log('text已经变了，页面变了吗？');
        })
    }

    render(){
        const { text } = this.state;
        return(
            <div>
                <div onClick={this.changeText}>Hello Component</div>
                <ComponentConcept2 text={text}/>
            </div>
        )
    }

}

// 16.0.0之前是react官方的创建组件的方式React.createClass，16.0.0之后弃用了
// 如今想在16.0.0及以上版本使用这种方式可使用Create-React-Class包
const ComponentConcept1 = CreateReactClass({
    getDefaultProps(){
        return {
            text:'随便命名',
        }
    },
    render(){
        const { text } = this.props;
        return (
            <div>{text}</div>
        )
    }
})

// 纯函数，无状态组件，只负责展示,只接收一个props和context作为参数
function ComponentConcept2({text = "hello 纯函数"}) {

    return (
       <div>{text}</div>

    )
}



export default ComponentConcept;
// export default ComponentConcept1;
// export default ComponentConcept2;


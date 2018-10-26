import React,{ Component } from 'react';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();// 负责订阅和发布

class SimpleEvent1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            response:'',
        }
    }

    componentDidMount(){
        // 组件渲染完毕添加事件监听即订阅
        this.response = emitter.on('sayHello',words => {
            this.setState({response: words});
        })
    }

    componentWillUnmount(){
        emitter.removeListener(this.response);// 组件卸载时清除监听即取消订阅
    }

    render(){
        const { response } = this.state;
        return (
            <div>
                <p>{response}</p>
                <SimpleEvent2/>
            </div>
        )
    }
}


class SimpleEvent2 extends Component{

    render(){
        return (
            <div>
                <p>simpleEvent2</p>
                <SimpleEvent3 />
                {/*组件SimpleEvent3没有通过属性传任何值*/}
            </div>
        )
    }
}


class SimpleEvent3 extends Component{

    ToResponse = () => {
        emitter.emit('sayHello','你好？');// 发布信息，第一个参数一定要与订阅者的一致。
    }

    render(){
        return (
            <div>
                <p>{}</p>
                <button onClick={this.ToResponse}>回复</button>
            </div>
        )
    }
}

export default SimpleEvent1;
import React, { Component } from 'react';
import LifeCycle from './lifeCycle';

class AppTestLifeCycle extends Component{

    constructor(props){
        super(props)
        this.state = {
            title:'noChange'
        }
    }
    componentWillMount(){
        console.log(`父组件挂载--componentWillMount`);
    }

    componentDidMount(){
        console.log(`父组件渲染完毕--componentDidMount,他将于子组件componentDidMount之后调用（因为递归）`);
    }

    componentWillReceiveProps(nextProps){
        console.log(`父组件这个方法不会执行，因为他的爸爸props没有发生变化`);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log(`父组件是否执行更新--shouldComponentUpdate`);
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log(`父组件将要挂载更新--componentWillUpdate`);
    }

    componentDidUpdate(preProps,preState){
        console.log(`父组件更新完成--componentDidUpdate，将于子组件的componentDidUpdate之后调用（因为递归）`);
    }

    componentWillUnmount(){
        console.log('父组件卸载--componentWillUnmount');
    }

    changeTitle = () => {
        this.setState({title:"changed"})
    }

    render(){
        console.log(`父组件进行渲染---render`);
        const { title } = this.state;
        return(
            <div>
                <h2>hello，生命周期看打印日志</h2>
                <LifeCycle title={title}/>
                <button onClick={this.changeTitle}>父组件</button>
            </div>
        )
    }
}

export default AppTestLifeCycle;
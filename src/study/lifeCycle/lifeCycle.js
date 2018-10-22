import React, { Component } from 'react';

class LifeCycle extends Component{

    constructor(props){
        console.log('LifeCyle --- constructor:类构建的开始');
        super(props);
        this.state = {
            life:true,
            temp:'0'
        }
    }

    static getDerivedStateFromProps(nextProps,nextState){
        /** 一顶三的静态函数 代替componentWillMount、componentWillUpdate、componentWillReceiveProps三个生命周期函数**/
        console.log('getDerivedStateFromProps',nextProps,nextState);
    }

    componentWillMount(){
        console.log('componentWillMount:组件挂在开始');
        console.log('componentWillMount:组件挂在开始,组件中ref标记的按钮实体为空',this.refs);
    }

    componentDidMount(){
        console.log('componentDidMount:绘制完成，已生成真实Dom');
        console.log('componentDidMount:绘制完成，已生成真实Dom，组件中ref标记的按钮实体有了',this.refs);
    }

    componentWillReceiveProps(nextProps){
        this.setState({temp:'2'})
        console.log(`componentWillReceiveProps:父组件props挂改变触发子组件该方法`);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate:是否更新UI界面',nextState.temp);
        console.log('shouldComponentUpdate:是否更新UI界面',this.state.temp);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate:更新组件',nextState.temp);
        console.log('componentWillUpdate:更新组件',this.state.temp);
    }

    componentDidUpdate(preProps, preState){
        console.log('componentDidUpdate:更新完成',preState.temp);
        console.log('componentDidUpdate:更新完成',this.state.temp);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount:组件卸载');
    }

    toChangeLift = () => {
        const { life } = this.state;
        this.setState({life:!life,temp:'1'})
    }


    render(){
        const { title }  = this.props;
        console.log('render:挂在之后，组件开始绘制');
        const { life } = this.state;
        return (
            <div className='box'>
                { life ? '生命周期' : '我是生命周期' }
                <button ref='btn' onClick={this.toChangeLift}>改变</button>
                {title}
            </div>
        )
    }
}

export default LifeCycle;
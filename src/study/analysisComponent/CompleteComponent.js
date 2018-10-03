import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*、
* 完整的带有生命周期的组件，有哪些东西
* */
class CompleteComponent extends Component{

    /**
     *props 类型检查，规定里面定义的每一个属性的值的数据类型
     * 类型检查主要用来捕获错误，当赋值不符合设定的类型时会打印警告，注意在正式环境是不会进行检查的
     * 详细的可直接去React中文网查看
     * 介绍类型检查目的是当在项目中看到别人组件中使用了类型检查，要认识，是干什么用的。
      */
    static propTypes = {
        age:PropTypes.number,// react 15.5版本及以上版本需要使用这个prop-types库(15.5版就已经弃用React.PropTypes)，之前的版本可直接使用React.PropTypes
        name:PropTypes.string,
        isMarry:PropTypes.bool
    }
    // props 默认类型设置，
    static defaultProps = {
        age:10,
        name:'Tom',
        isMarry:false
    }


    /**
     * 构造方法，一般初始化组件的state需要在这里初始化,
     * 也可以给props赋值
     */
    constructor(props){
        super(props);
    }

    /*、
    * 定义一个点击事件回调函数
    * */
    eventHandle = () => {
        alert('你点击了按钮');
    }

    /**
     * render 函数是组件必备的一个方法，渲染dom，即生成页面
     * render函数必须有返回值，否则什么也不会有
     */

    render(){
        const { age, name, isMarry } = this.props;
        // return 返回的HTML最外层必须仅且只有一个父标签。
        return (
            <div>
                {/*jsx语法中的注释只能写在 大括号把裹起来的这里*/}
                <p>请确定资料：</p>
                <p>&nbsp;&nbsp;&nbsp;姓名&nbsp;{name}</p>
                <p>&nbsp;&nbsp;&nbsp;年龄&nbsp;{age}</p>
                <p>&nbsp;&nbsp;&nbsp;是否已婚&nbsp;{isMarry}</p>
                <button onClick={this.eventHandle}>确定</button>
            </div>
        )
    }
}

// 类型检查和默认类型 也可以这么写不直接放在CompleteComponent组件里面
/*CompleteComponent.propTypes = {
    age:PropTypes.number,
    name:PropTypes.string,
    isMarry:PropTypes.bool,
}
CompleteComponent.defaultProps = {
    age:10,
    name:'Tom',
    isMarry:false
}*/

export default CompleteComponent;

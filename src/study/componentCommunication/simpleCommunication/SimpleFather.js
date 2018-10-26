import React,{ Component } from 'react';

class SimpleFather extends Component{

    receptionData = (data) => {
        console.log(`son say:${data}`);// 打印出子组件传回的信息
    }

    render(){
        return (
            <div>
                <SimpleSon say={'hello son'} whatSaySon={this.receptionData}/>
                {/*通过say属性给子组件传递数据，可传递任何类型，这里是字符串*/}
            </div>
        )
    }
}


class SimpleSon extends Component{

    ToResponse = () => {
        const { whatSaySon } = this.props;// 通过props拿到父组件的回调函数
        whatSaySon('hello father');// 执行父组件的回调函数
    }

    render(){
        // 子组件通过props拿到父组件的值
        const { say } = this.props;
        return (
            <div>
                <p>{say}</p>
                <button onClick={this.ToResponse}>回复</button>
            </div>
        )
    }
}
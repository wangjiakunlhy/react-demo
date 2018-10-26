import React,{ Component } from 'react';
const cont = React.createContext('hello everyone');

class SimpleContext1 extends Component{

    constructor(props){
        super(props);
        this.state = {
            options:{
                say:'hello',
                callBack:this.receptionData,
            }
        }
    }

    receptionData = (data) => {
        console.log(`son say:${data}`);// 打印出子组件传回的信息
    }

    render(){
        const { options } = this.state;
        return (
            <cont.Provider value={options}>
                {/*信息提供者必须被包裹在Provider中，提供的值放在value中*/}
                <div>
                    <SimpleContext2/>
                </div>
            </cont.Provider>
        )
    }
}


class SimpleContext2 extends Component{

    render(){
        return (
            <div>
                <p>simpleContext2</p>
                <SimpleContext3 />
                {/*组件SimpleContext3没有通过属性传任何值*/}
            </div>
        )
    }
}


class SimpleContext3 extends Component{

    ToResponse = (value) => {
        const { callBack } = value;// 通过value拿到父组件的回调函数
        callBack('hello father');// 执行父组件的回调函数
    }

    render(){
        return (
            <cont.Consumer>
                {/*接收信息的组件必须包裹在consumer中，注意下面的书写的格式*/}
                {
                    (value) => (
                        <div>
                            <p>{value.say}</p>
                            <button onClick={()=>this.ToResponse(value)}>回复</button>
                        </div>
                    )
                }
            </cont.Consumer>
        )
    }
}

export default SimpleContext1;
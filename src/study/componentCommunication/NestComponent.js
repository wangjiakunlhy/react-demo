import React, { Component } from 'react';
import Daughters from './Daughter'
import context from "./SayWordContext";
const { Grand, Daughter } = context;

// 奶奶让妈妈叫孙女吃饭，孙女直接告诉奶奶她吃完了。
class NestComponent extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
                <Grandmother />
            </div>
        )
    }
}


class Grandmother extends Component{
    constructor(props){
        super(props);
        this.state = {
            sentence:'',// 奶奶自己说的话
            response:'',// 妈妈回应的话
        }
    }

    toSay = () => {
        this.setState({sentence:'吃饭了，叫下那小家伙！'})
    }

    /**
     *grandmother 和 mother 通信的回调函数
     * @param data  来自mother传回的数据
     */
    getResponseFromMather = (data) => {
        this.setState({response:data.sayWord});
    }

    render(){
        const { sentence, response } = this.state;
        return (
            <Grand.Provider value={sentence}>
                <div style={{border:'1px solid #ccc'}}>
                    <button onClick={this.toSay}>奶奶发话</button>
                    {
                        sentence && <div>
                            <span>奶奶说：</span>
                            <span>{sentence}</span>
                        </div>
                    }
                    {
                        response && <div>
                            <span>妈妈回应：</span>
                            <span>{response}</span>
                        </div>
                    }
                    <Mother grand={sentence} callBack={this.getResponseFromMather}/>
                </div>
            </Grand.Provider>
        )
    }
}


class Mother extends Component{
    constructor(props){
        super(props);
        this.state = {
            sayWord:'',// 妈妈回应的话
        }
    }

    toResponse = () => {
        const { callBack } = this.props;
        callBack({sayWord:'知道啦，这就叫她'});
        this.setState({sayWord:'知道啦，这就叫她'});
    }

    render(){
        const { grand } = this.props;
        const { sayWord } = this.state;
        return (
            <div style={{border:'1px solid #0f0'}}>
                <div>妈妈</div>
                <div>奶奶说:{grand}</div>
                {
                    sayWord && <div>
                        妈妈说：{sayWord}
                    </div>
                }
                <button onClick={this.toResponse}>妈妈回应</button>
                <Daughters />
            </div>
        )
    }
}


export default NestComponent;

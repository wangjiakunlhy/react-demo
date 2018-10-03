import React, { Component } from 'react';

/*
* 受控组件
* */
class ComponentControl extends Component{

    constructor(props){
        super(props);
        this.state = {
            componentName:'ComponentControl',
            nameValue:"",
            addressValue:"",
        }
    }

    handleNameChange = (event) => {
        this.setState({nameValue:event.target.value});
    }

    handleAddressChange = (event) => {
        this.setState({addressValue:event.target.value});
    }

    render(){
        const { nameValue, addressValue } = this.state;
        return(
            <div className='analysisStyle'>
                <input className='inputStyle' type='text' placeholder='输入姓名' value={nameValue} onChange={this.handleNameChange}/>
                <br/>
                <input className='inputStyle' type='text' placeholder='输入地址' value={addressValue} onChange={this.handleAddressChange}/>
                <br/>
                <div>姓名：{nameValue}</div>
                <div>地址：{addressValue}</div>
                <ComponentUncontrol />
            </div>
        )
    }

}

/*
* 非受控组件
* */
class ComponentUncontrol extends Component {

    constructor(props){
        super(props);
        this.state = {
            componentName: 'ComponentUncontrol',
            nameValue:"名字",
            addressValue:"地址",
        }
    }

    handleNameChange = (event) => {
        this.setState({nameValue:'你好，我是谁？'},() => {
            console.log(this.state.nameValue);
        });
    }

    handleAddressChange = (event) => {
        this.setState({addressValue:"你好我改变了"},() => {
            console.log(this.state.addressValue);
        });
    }

    toSubmit = (e) => {
        e.preventDefault();//防止页面刷新
        console.log(this.refs.addressValue.value);
        console.log(this.refs.nameValue.value);
    }

    render(){
        const { nameValue, addressValue } = this.state;
        return(
            <div className='analysisStyle'>
                <form onSubmit={this.toSubmit}>
                    <input className='inputStyle' type='text' ref='nameValue' onChange={this.handleNameChange} defaultValue={nameValue} placeholder='输入姓名' />
                    <input className='inputStyle' type='text' ref='addressValue' onChange={this.handleAddressChange} defaultValue={addressValue} placeholder='输入地址' />
                    <button className='btnStyle' type='submit'>提交</button>
                </form>
                <div>姓名：{nameValue}</div>
                <div>地址：{addressValue}</div>
            </div>
        )
    }
}

export default ComponentControl;
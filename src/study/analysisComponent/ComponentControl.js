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
        this.setState({nameValue:event.target.value});// 获取输入值并更新到state的nameValue值上
        // 受控组件，注释掉上面一行则页面上输入框无法输入，因为输入框value值受state控制，state初始值是空，无变化，则页面显示一直是空。
    }

    handleAddressChange = (event) => {
        this.setState({addressValue:"我任性，地址就是泰坦星"});
    }

    render(){
        const { nameValue, addressValue } = this.state;
        return(
            <div className='analysisStyle'>
                <h2>受控组件</h2>
                <input className='inputStyle' type='text' placeholder='输入姓名' value={nameValue} onChange={this.handleNameChange}/>
                <br/>
                <input className='inputStyle' type='text' placeholder='输入地址' value={addressValue} onChange={this.handleAddressChange}/>
                <br/>
                <div>姓名：{nameValue}</div>
                <div>地址：{addressValue}</div>
                {/*调用一下非受控组件，显示在一起便于观察*/}
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
            nameValue:"",
            addressValue:"",
        }
    }

    handleNameChange = (event) => {
        // 非受控组件同样对state的nameValue值进行更新，看input输入框显示和下面显示是不一样，因为input输入框的值不受控state控制
        this.setState({nameValue:'你好，我是谁？'},() => {
            console.log(this.state.nameValue);
        });
    }

    handleAddressChange = (event) => {
        this.setState({addressValue:"我任性，地址就是泰坦星"});
    }

    render(){
        const { nameValue, addressValue } = this.state;
        return(
            <div className='analysisStyle'>
                <h2>非受控组件</h2>
                <form>
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
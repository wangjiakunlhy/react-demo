import React,{ Component } from 'react';
import HOC from './HOC'

@HOC()
class ButtonComponent1 extends Component{

    handleClick1 = () => {
        console.log('handleClick1');
    }

    handleClick2 = () => {
        console.log('handleClick2');
    }

    render(){
        const { options } = this.props;
        return (
            <div>
                <div>啊哈，谁在唱情歌，啊哈，不知道词。</div>
                <div>
                    <button ref="power1" onClick={this.handleClick1}>权限1</button>
                    <button ref="power2" onClick={this.handleClick2}>权限2</button>
                    <button ref="power3">权限3</button>
                </div>
            </div>
        )
    }
}

export default ButtonComponent1;
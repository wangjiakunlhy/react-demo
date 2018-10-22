import React,{ Component } from 'react';
import '../../style/higherOrderComponent/higherOrderComponent.scss';

const AttributeAgentHigherOrderComponent2 = (BaseComponent) =>
     class extends Component{

        constructor(props){
            super(props);
            this.state = {
                value:this.props.initValue || '',
            }
        }

        onValueChange = (event) => {
            let value = event.target.value.toString();
            // 这句最直观的体现什么是受控（要什么值显示什么值）
            value = `输入:${value === '输入' ? '' : value.replace('输入:','')}`;
            this.setState({value:value});
        }

        render(){
            const { value } = this.state;
            const newProps = {
              value: value,
              eventOnChange:{
                  onChange: this.onValueChange
              },
            }
            const props = Object.assign({},this.props,newProps);
            return (
                <BaseComponent {...props}/>
            )
        }

     }

export default AttributeAgentHigherOrderComponent2;
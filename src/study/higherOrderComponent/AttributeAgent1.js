import React,{ Component } from 'react';
import '../../style/higherOrderComponent/higherOrderComponent.scss';

const AttributeAgentHigherOrderComponent1 = (BaseComponent) =>
     class extends Component{

        constructor(props){
            super(props);
            this.state = {
                cardSwitch:'禁用',
            }
        }
        setCardEnable = (instance) => {
            console.log(instance);
            let now = this.state.cardSwitch === '禁用' ? '启用' : '禁用';
            this.setState({
                cardSwitch: now,
            })
        }

        render(){
            const { cardSwitch } = this.state;
            const newProps = {
              status:cardSwitch,
              name:'持卡人姓名',
              num:'卡号',
              eventClick:{
                onClick:this.setCardEnable,
              }
            }
            const props = Object.assign({}, newProps, this.props);
            return (
                <span className='HOC'>
                    <span className={cardSwitch === '禁用' ? 'bgEnable' : 'bgDisable'}>
                        <BaseComponent {...props} />
                    </span>
                </span>
            )
        }

     }

export default AttributeAgentHigherOrderComponent1;
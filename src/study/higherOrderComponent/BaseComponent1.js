import React,{ Component } from 'react';
import AttributeAgentHigherOrderComponent1 from './AttributeAgent1';
import '../../style/higherOrderComponent/higherOrderComponent.scss';

@AttributeAgentHigherOrderComponent1
class CordBox extends Component{

    render(){
        const { name, status, num, eventClick} = this.props;
        return (
           <div className='cardBox'>
               <div className='cardContent'>
                   <p>{name}</p>
                   <h4>{num}</h4>
               </div>
               <div className='cardOperator'>
                   <button {...eventClick}>{status}</button>
               </div>
           </div>
        )
    }
}

export default CordBox;
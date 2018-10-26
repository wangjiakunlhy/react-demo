import React,{ Component } from 'react';
import AppTestLifeCycle from './lifeCycle/app';
import ComponentConcept from './analysisComponent/ComponentConcept';
import NestComponent from './componentCommunication/NestComponent';
import SimpleContext1 from './componentCommunication/simpleCommunication/SimpleContext';
import SimpleEvent1 from './componentCommunication/simpleCommunication/SimpleEvent';
import CompleteComponent from './analysisComponent/CompleteComponent';
import Father from './analysisComponent/ComponentDataStream';
import ComponentControl from './analysisComponent/ComponentControl';
import ComponentAndEvent from './analysisComponent/ComponentAndEvent';
import CordBox from './higherOrderComponent/BaseComponent1';
import ControlInput from './higherOrderComponent/BaseComponent2';
import ReverseInherit from './higherOrderComponent/BaseComponent3';
import ButtonComponent1 from "./higherOrderComponent/powerButton/ButtonComponent1";
import ButtonComponent2 from "./higherOrderComponent/powerButton/ButtonComponent2";

import '../style/testComponent.scss'


class TestComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentComponent:{name:'组件概念',comp:<ComponentConcept />},// 当前展示的组件
            components: [
                {name:'组件概念',comp:<ComponentConcept />},
                {name:'数据流',comp:<Father />},
                {name:'事件系统',comp:<ComponentAndEvent />},
                {name:'受控和非受控组件',comp:<ComponentControl />},
                {name:'完整组件',comp:<CompleteComponent />},
                {name:'生命周期',comp:<AppTestLifeCycle />},
                {name:'组件通信',comp:<NestComponent />},
                {name:'组件通信2',comp:<SimpleContext1 />},
                {name:'组件通信3',comp:<SimpleEvent1 />},
                {name:'HOC-属性代理1',comp:<CordBox />},
                {name:'HOC-属性代理2',comp:<ControlInput />},
                {name:'HOC-反向继承1',comp:<ReverseInherit />},
                {name:'HOC-反向继承2',comp:<ButtonComponent1 />},
                {name:'HOC-反向继承2.1',comp:<ButtonComponent2 />},
            ]
        }
    }

    changeShowComponent = (item) => {
        this.setState({currentComponent:item});
    }

    render(){
        const { components, currentComponent } = this.state;
        return (
            <div className='testComponent'>
                <div className='testBtnMenu'>
                    <h3 className='menuTitle'>组件菜单</h3>
                    {
                      components.map(item => {
                          return (
                              <div
                                  className={currentComponent.name === item.name ? 'menuItemOn' : 'menuItemOff'}
                                  key={item.name}
                                  onClick={()=>this.changeShowComponent(item)}
                              >{item.name}</div>
                          )
                      })
                    }
                </div>
                <div className='testContentBox'>
                    <div className='title'>{currentComponent.name}</div>
                    <div className='contentLayout'>
                        <div className='showComponent'>
                            {currentComponent.comp}
                        </div>
                        <div className='readFile'>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export  default  TestComponent;
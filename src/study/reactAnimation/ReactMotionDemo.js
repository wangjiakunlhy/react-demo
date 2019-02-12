import React,{ Component } from 'react';
import { Motion, spring } from 'react-motion';

import '../../style/reactAnimate/reactMotionDemo.scss';

class ReactMotionDemo extends Component{

    constructor(props){
        super(props);
        this.state = {
            to:false,
        }
    }

    render(){
        const { to } = this.state;
        return (
            <di className='react-motion-demo'>
                <button onClick={()=> this.setState({to:!to})}>Start</button>
                <div className='flex-line'>
                    <Motion defaultStyle={{x: 0,y: 0}} style={{x: spring(to ? 720 : 0),y: spring(to ? 60 : 0 )}}>
                        {
                            ({x,y}) => <div>
                                <div className={`small-box`} style={{transform:`rotate(${x}deg) translateX(${y}px)`}}/>
                            </div>
                        }
                    </Motion>
                    <Motion defaultStyle={{x: 0,y: 0}} style={{x: spring(to ? 720 : 0),y: spring(to ? 60 : 0 )}}>
                        {
                            ({x,y}) => <div>
                                <div className={`small-box`} style={{transform:`rotate(${x}deg) translateX(${y}px)`}}/>
                            </div>
                        }
                    </Motion>
                    <Motion defaultStyle={{x: 0,y: 0}} style={{x: spring(to ? 720 : 0),y: spring(to ? 60 : 0 )}}>
                        {
                            ({x,y}) => <div>
                                <div className={`small-box`} style={{transform:`rotate(${x}deg) translateX(${y}px)`}}/>
                            </div>
                        }
                    </Motion>
                </div>
            </di>
        )
    }
}

export default ReactMotionDemo;
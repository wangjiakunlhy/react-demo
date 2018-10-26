import React,{ Component } from 'react';
import contextAndEvent from './SayWordContext';
const {Grand, eventEmitter } = contextAndEvent;

class Daughters extends Component{
    constructor(props){
        super(props);
        this.state = {
            response:'',
        }
    }

    toResponseGrandmother = () => {
        this.setState({response:'我吃完了！'},()=>{
            eventEmitter.emit('girlSay','我吃完了！');
        });
    }

    render(){
        const { response } = this.state;
        return (
            <Grand.Consumer>
                {
                    (sayWhat) => (
                      <div style={{border:'1px solid #00f'}}>
                          <div>
                              孙女也听到奶奶说的：{sayWhat}
                          </div>
                          {
                              response && <div>
                                  {response}
                              </div>
                          }
                          <button onClick={this.toResponseGrandmother}>孙女回答</button>
                      </div>
                    )
                }
            </Grand.Consumer>
        )
    }
}

export default Daughters;
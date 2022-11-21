import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild'

export class ForwardRefParent extends Component {
    constructor(props){
        super(props);
        this.fRef=React.createRef();
    }
    handle=()=>{
        this.fRef.current.focus();
    }
  render() {
    return (
      <div>
        <ForwardRefChild ref={this.fRef}/>
        <button onClick={this.handle}>Click</button>
      </div>
    )
  }
}

export default ForwardRefParent

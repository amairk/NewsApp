//crating Ref for focusing an input element after clicking the button

import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props){
        super(props);
        this.inputRef=React.createRef();
    }
    handle=()=>{
        this.inputRef.current.focus();
    }
  render() {
    return (
      <div className='container'>
        <input type='text' ref={this.inputRef}/>
        <br/><br/>
        <button onClick={this.handle}>Click here</button>
      </div>
    )
  }
}

export default Refs

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Refs from './components/Refs';
// import ForwardRefParent from './components/ForwardRefParent';
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       progress:0
    }
  }
  setProgress=(n)=>{
    this.setState({progress:n})
  }
  render() {
    return (
      <>
       <BrowserRouter>
          <Navbar/>
          <LoadingBar color='#f11946' progress={this.state.progress}/>
          <Routes>
              <Route exact path="/" element={<News progress={this.setProgress} key="general" category="general"/>}/>
              <Route exact path="/business" element={<News progress={this.setProgress} key="business" category="business"/>}/>
              <Route exact path="/entertainment" element={<News progress={this.setProgress} key="entertainment" category="entertainment"/>}/>
              <Route exact path="/health" element={<News progress={this.setProgress} key="health" category="health"/>}/>
              <Route exact path="/science" element={<News progress={this.setProgress} key="science" category="science"/>}/>
              <Route exact path="/sports" element={<News progress={this.setProgress} key="sports" category="sports"/>}/>
              <Route exact path="/technology" element={<News progress={this.setProgress} key="technology" category="technology"/>}/>
          </Routes>

          {/* Ref for focusing an element */}
          {/* <Refs/> */}
          
          {/* <ForwardRefParent/> */}
       </BrowserRouter>
      </> 
    )
  }
}

export default App

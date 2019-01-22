import React, { Component } from 'react'
import './app.styl'

class App extends Component{
  constructor(){
    super()
  }

  componentDidMount(){

  }

  render(){
    return(
      <div id="appContent">
        <img src="http://placekitten.com/360/300" width="360" />
        <h1>"Responsive" resizing using scale transform</h1>
        <h3>Content in this box is styled as if it were inside a fixed 800x600 div. This is then scaled up or down according to the container.</h3>
        <p>Content in this box won't get moved around; even this paragraph absolutely positioned with pixel values.<br /><br />
          It even works down to mobile sizes, although obviously stuff may be unreadable then.</p>
      </div>
    )
  }
}

export default App
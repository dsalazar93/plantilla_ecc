import React, { Component } from 'react'
import './app.styl'

import img_blue from './img/blue.jpg'
import img_sunflower from './img/sunflower.jpg'
import img_cyber from './img/cyber.jpg'
import img_otonio from './img/otonio.jpg'

class App extends Component{
  constructor(){
    super()

    this.state = {
      currentPage: 0,
      AllPages: '',
      pageCount: 0
    }

    this.displayChoicedPage = this.displayChoicedPage.bind(this)
    this.hidePreviousPage = this.hidePreviousPage.bind(this)
    this.appNavigate = this.appNavigate.bind(this)
  }

  appNavigate(e){
    let pageToExit = this.state.currentPage
    if (e.target.classList.contains('appPagination-prev')){
      if ( (pageToExit-1) >= 0){
        this.setState({
          currentPage: this.state.currentPage - 1
        }, function(){
          console.log(this.state.currentPage)
          this.hidePreviousPage(pageToExit)
          this.displayChoicedPage()
        })
      }
    } else {
      if ( (pageToExit+1) < this.state.pageCount){
        this.setState({
          currentPage: this.state.currentPage + 1
        }, function(){
          this.hidePreviousPage(pageToExit)
          this.displayChoicedPage()
        })
      }
    }
  }

  hidePreviousPage(page){
    let currentPageDisplayed = this.state.AllPages[page]
    currentPageDisplayed.classList.remove('appPage-current')
  }

  displayChoicedPage(){
    let currentPageDisplayed = this.state.AllPages[this.state.currentPage]
    currentPageDisplayed.classList.add('appPage-current')
  }

  componentDidMount(){
    this.setState({ 
      AllPages : document.querySelectorAll('.appPages'),
      pageCount : document.querySelectorAll('.appPages').length
    }, function(){ this.displayChoicedPage() })
    
  }

  render(){
    return(
      <div id="appContent">
        {/* <img src={img_blue} width="360" />
        <h1>"Responsive" resizing using scale transform</h1>
        <h3>Content in this box is styled as if it were inside a fixed 800x600 div. This is then scaled up or down according to the container.</h3>
        <p>Content in this box won't get moved around; even this paragraph absolutely positioned with pixel values.<br /><br />
          It even works down to mobile sizes, although obviously stuff may be unreadable then.</p> */}
        <div id="appMainBox">
          <div className="appPages appPage-0"></div>
          <div className="appPages appPage-1"></div>
          <div className="appPages appPage-2"></div>
          <div className="appPages appPage-3"></div>
          <div id="appPagination">
            <div className="appPaginationButtons appPagination-prev" onClick={this.appNavigate}>&#10094;</div>
            <div className="appPaginationButtons">
              {`${this.state.currentPage + 1} de ${this.state.pageCount}`}
            </div>
            <div className="appPaginationButtons appPagination-next" onClick={this.appNavigate}>&#10095;</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
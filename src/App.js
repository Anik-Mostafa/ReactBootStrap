import React, {Component} from 'react'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import Project from './Project.js'
import Screenshot from './Screenshot.js'
import {Col} from 'react-bootstrap';
import Navbar from './components/Navbar.js'
import Img from './components/Img.js'
import MainCallToAction from './components/MainCallToAction.js'
import ImageLink from './components/ImageLink.js'


const App = () =>{
  return(
    <div>
      <Navbar/>
      <Img/>
      <MainCallToAction/>
    
    </div>
  )
}
 export default App;

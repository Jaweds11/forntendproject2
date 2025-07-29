import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Page1  extends Component {
  render() {
    return (
      <div>

        <h1> india is my country</h1>
        <Link to="/Page2">Go To Page2</Link> 
 <br/><br/><br/>
       <Link to="/">Go To HomePage </Link>
        
      </div>
    )
  }
}


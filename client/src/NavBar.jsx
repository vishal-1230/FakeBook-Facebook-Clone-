import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <div id='navbar'>
        <p style={{paddingTop:'0', marginTop:'0'}}>{props.title}</p>
        {/* <img src="./logo.png" alt="Img" /> */}
        {/* <Link to="/about">About</Link> */}
        {/* <a href="/about">About</a> */}
    </div>
  )
}

export default NavBar
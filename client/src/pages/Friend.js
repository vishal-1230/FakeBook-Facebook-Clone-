import React from 'react'

function Friend(props) {
  return (
    <li><img src={props.logo} alt="dp" id='dpsugg'/><span>{props.user}</span><button className="btn btn-outline-primary" id={props.key}><i class="fa-solid fa-message"></i></button></li>
  )
}

export default Friend
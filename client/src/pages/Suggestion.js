import React from 'react'

function Suggestion(props) {
  return (
    <li><img src={props.logo} alt="dp" id='dpsugg'/><span>{props.user}</span><button className="btn btn-outline-primary" id={props.key} onClick={props.onclick1}><i class="fa-solid fa-user-plus"></i></button></li>
  )
}

export default Suggestion
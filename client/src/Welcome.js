import React from 'react'
// import './index.css'
import './Welcome.css'
import people from './people.jpg'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <>
    <div className="card">
      <div className='cardTxt'>
        <h2 id='welTitle'>Connecting The World. <span id='fbspan'>FakeBook</span></h2>
        <p id='welText'>Join the world's Largest Network of Fake People. No one knows<br />You might become the next Richest Faker. Just click on Join<br /> Now or Login if you're already a Faker.</p>
        <Link to='/signup'><button className='button-40 welbtns'>Join Now</button></Link>
        <Link to='/login'><button className='button-40 welbtns' id='loginbtn'>Login</button></Link>
      </div>
    <img src={people} alt="Img" id='peopleimg' />
    </div>
    </>
  )
}

export default Welcome
import React from 'react'
import './post.css'
import {ThumbUpIcon} from '@heroicons/react/outline'
import img1 from '../posts/img1.jpg'
import likes from '../likes2.jpg'

function Post(props) {
  const users=['Alan Becker', 'Evelyn Shrivastava', 'Narendra Modi', 'Fred Rich', 'User 4512', 'Narendra Modi', 'Evelyn Shrivastava', 'Alan Becker', 'Fred Rich']
  const likesRand=[56, 25, 42, 17, 28, 35, 26, 38, 49]

  function likePost(p){
    const likes=document.getElementById(p)
    likes.innerHTML=(parseInt(likes.innerHTML)+1).toString()
  }

  return (
    <div className="card" id='postcard'>
      <h5 className='card-header'>{users[Math.floor(Math.random()*10)]}
      {/* <p style={{fontSize:'small', fontWeight:'normal', padding:'0'}}>Jul 25, 05:30 pm</p> */}
      </h5>
      <img src={props.img} alt="" id='img' className='card-imgk'/>
      <div className="footer">
        <h6 id='likescount' ><span id={props.id}>{likesRand[Math.floor(Math.random()*10)]}</span></h6><img src={likes} alt="likes" id='likesimg'/>
        <button id='likebtn' className='btn btn-outline-primary' onClick={()=>{likePost(props.id)}}><i class="fa-regular fa-thumbs-up"></i><span id='liketxt'>Like</span></button>
      </div>
    </div>
  )
}

// <i class="fa-solid fa-thumbs-up"></i>



export default Post
import React from 'react'
import Post from './Post'
import './posts.css'
import img1 from '../posts/img1.jpg'
import img2 from '../posts/img2.jpg'
import img3 from '../posts/img3.webp'

function Posts() {
  return (
    <>
    <div className="postsview" >
        <Post img={img1} id='1'/>
        <Post img={img2} id='2'/>
        <Post img={img3} id='3'/>
        <Post img={img2} id='4'/>
    </div>
    
    </>
  )
}

{/* <Post img={img1}/>
      <Post img={img2}/>
      <Post img={img3}/> */}



export default Posts
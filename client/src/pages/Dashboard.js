import React, { useEffect } from 'react'
import './dashboard.css'
import { useState } from 'react'
import Posts from './Posts'
import logo from '../posts/img5.jpg'
import logo2 from '../posts/img4.jpg'
import logo4 from '../posts/img4.jpg'
import logo5 from '../posts/img5.jpg'
import logo3 from '../posts/img3.webp'
import guy1 from '../dps/guy1.jpg'
import guy2 from '../dps/guy2.jpg'
import guy3 from '../dps/guy3.jpg'
import guy4 from '../dps/guy4.jpg'
import Suggestion from './Suggestion'
import Friend from './Friend'
import vishal from '../dps/Vishal2.jpg'


function Dashboard() {

    if (document.cookie.charAt(0)!='k'){
        window.location.href='http://192.168.0.6:3000/login'
    }
    const user=document.cookie.slice(4)
    let dp=''
    const [name1, setname1] = useState('n')
    const [firsttime, setfirsttime]=useState(false)
    const [about1, setabout1] = useState('')
    const [dob1, setdob1] = useState('')
    const [friends1, setfriends] = useState('')
    const [sugg, setsugg] = useState('')
    const imgs=[logo, logo2, logo3, logo4, logo5, guy1, guy2, guy3, guy4, logo]
    let suggLoaded=false
    let frndsLoaded=false
    if (sugg!=''){
        suggLoaded=true
    }
    if (friends1!=''){
        frndsLoaded=true
    }
    
    // useEffect(()=>{
        async function getData(user){
            const resp=await fetch(`http://192.168.0.6:8000/getData?user=${user}`, {headers:{'Content-Type':'application/json', 'accepts':'application/json'}})
            const data=await resp.json()
            setname1(data[0].name)
            console.log(data[0])
            if ('dob' in data[0]){
                console.log(data)
                setname1(data[0].name)
                setdob1(data[0].dob.slice(0, 10).toString().replace('-', '/').replace('-', '/'))
                setabout1(data[0].about)
                setfriends(JSON.stringify(data[0].friends))
                
                // setposts1(data[0].posts)
                // console.log(data[0].name, data[0].dob, data[0].about, data[0].friends, data[0]);
            }else{
                setfirsttime(true)
            }
            
        }
        getData(user)        
    // })
    
    async function getSugg(){
        const response=await fetch(`http://192.168.0.6:8000/getSugg?user=${user}`)
        const data= await response.json()
        // console.log(data);
        setsugg(JSON.stringify(data))
    }
    getSugg()

    async function getFrnds(){
        const response=await fetch(`http://192.168.0.6:8000/getFrnds?user=${user}`)
        const data=await response.json()
        setfriends(JSON.stringify(data))
    }

    async function addFriend(user1){
        await fetch(`http://192.168.0.6:8000/addFrnd?name=${user1}&key=${user}`)
    }

    function onUpload(e){
        document.getElementById('upimg').src=URL.createObjectURL(e.target.files[0])
        document.getElementById('personicon').style.display='none'
        alert(URL.createObjectURL(e.target.files[0]))
    }

    function uploadimg(){
        document.getElementById('dp').click()
    }



    return (firsttime ? <>
        <div className='detailsCard'>
            <button className='btn btn-primary' id='uploadbtn' onClick={uploadimg}>Upload Photo</button>
            <img src="" alt='' id="upimg"/>
            <i class="fa-solid fa-circle-user" id='personicon'></i>
            <form action="http://192.168.0.6:8000/setDetails" id='details' method="post">
            <input type="file" name="dp" id="dp" style={{display:'none'}} onChange={onUpload} accept='image/jpg, image/png, image/jpeg'/>
            <label htmlFor="" className="form-label">Name</label>
            <input type="text" placeholder='Name' name='name' className="form-control" /><br /><br />
            <label htmlFor="" className="form-label">DOB</label><br />
            <input type="date" name="dob" required id="dob" /><br /><br /><br />
            <label htmlFor="" required className='form-label' >About</label><br />
            <textarea name="about" id="about" cols="30" rows="4" minLength='80' maxLength={'110'} placeholder='Tell Somethings About Yourself' className='form-control'></textarea><br /><br />
            <button type="submit" className='btn btn-primary' id='detailsSubBtn'>Submit</button>
            <label htmlFor=""></label>
            </form>
        </div>
    </> : <>
    <div className="dashboard" >
        <div className="suggestions" >
            <h5 className='card-header-suggestions'>Suggestions</h5>
            <div className="suggitems">
            <ul id='suggList'> 
                {suggLoaded ? JSON.parse(sugg).map((i)=>{
                    return <Suggestion logo={imgs[Math.floor(Math.random()*10)]} user={i} key={i} onclick1={()=>{addFriend(i)}} />
                }):''}
                
            </ul>
            </div>
        </div>
        <div className="rightpanel">
            <div className="profile">
                <img src={logo} alt="" id='userdp'/>
                <h4>{name1}</h4>
                <p className='dob'><i class="fa-solid fa-cake-candles"></i>&nbsp;&nbsp;{dob1}</p>
                <p className="about">{about1}</p>
            </div>
            <div className="friends">
                <h5 className="card-header-suggestions">Friends</h5>
                <ul id='frndsList'>
                    {/* <Friend logo={logo} user='abcd' key='652' />
                    <Friend logo={logo2} user='ihfdas' key='27t' />
                    <Friend logo={logo3} user='hgsfdgsf' key='562' />
                    <Friend logo={logo2} user='abcartdgd' key='2567' />
                    <Friend logo={logo} user='sdfasdgvc' key='25867' />
                    <Friend logo={logo3} user='tyujthnb' key='5672' />
                    <Friend logo={logo2} user='erhbgfhdf' key='672' />
                    <Friend logo={logo2} user='ghjhbn ' key='256' /> */ }
                    {frndsLoaded? JSON.parse(friends1).map((i)=>{
                        return <Friend logo={imgs[Math.floor(Math.random()*10)]} user={i} key={i} />
                    }):''}
                </ul>
            </div>
        </div>
        <button className='btn btn-primary' id='postbtn' ><i class="fa-solid fa-plus"></i>&nbsp; Add Post</button>
        <Posts />
        
    </div>
    </>)
}

export default Dashboard
import React from 'react'
import './signup.css'

function Login() {
  // let logged2=false
  if (document.cookie.charAt(0)=='k'){
    console.log(document.cookie);
    window.location.href='http://192.168.0.6:3000/dashboard'
    // logged2=true
  }else if (document.cookie.charAt(0)!='k'){
    const a=4
  }

  return (
    <div>
        <form action="http://192.168.0.6:8000/login" method='post' autoComplete='off'>
            <div className="logincard" >
            <h1>Login</h1><br />
            <label htmlFor="">UserName</label><br />
            <input type="text" name="user" id="user" placeholder='UserID' required autoComplete='off' className='form-control lg' />
            <label htmlFor="" id='userNotAv' style={{fontSize:'smaller', color:'red'}}></label><br /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" name="pswd" placeholder='Password' required id="pswd" className='form-control lg' />
            <label htmlFor="" id='wroPass' style={{fontSize:'smaller', color:'red'}}></label><br /><br />
            <button type="submit" id="btnsub" className='btn btn-primary'>Login</button><br />
            </div>
        </form>
    </div>
  )
}

export default Login
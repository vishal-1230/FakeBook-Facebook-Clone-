import React from 'react'
import './signup.css'

function Signup() {
    // let logged1=false
    if (document.cookie.charAt(0)=='k'){
        // logged1=true
        window.location.href='http://192.168.0.6:3000/dashboard'

    }else if (document.cookie.charAt(0)!='k'){
        // logged1=false
    }


    function onUserChange(e){
        if (true){
            const lbl1=document.getElementById('userNotAv')
            const lbl2=document.getElementById('wroPass')
            const btn=document.getElementById('btnsub')
            console.log('trying1');
            async function checkUser(){
                console.log('trying2');
                const response=await fetch(`http://192.168.0.6:8000/signup/checkUser?user=${e.target.value}`, {headers: {'Content-Type':'application/json', 'accepts':'application/json'}})
                const data=await response.json()
                console.log(data);

                if (data=='0'){
                    lbl1.innerHTML='Username Not Available'
                    btn.disabled=true
                }else if (data=='1'){
                    lbl1.innerHTML=''
                    if (lbl2.innerHTML==''){
                        btn.disabled=false
                    }
                }else{
                    lbl1.innerHTML='error!!'
                }
            }

            checkUser()
        }
    }

    function onPassChange(e){
        if (true){
            const pass=e.target.value
            const lbl2=document.getElementById('wroPass')
            const lbl1=document.getElementById('userNotAv')
            const btn=document.getElementById('btnsub')
            async function checkPass(){
                const response=await fetch(`http://192.168.0.6:8000/signup/checkPass?pass=${pass}`, {headers: {'Content-Type':'application/json', 'accepts':'application/json'}})
                const data=await response.json()

                if (data=='1'){
                    lbl2.innerHTML=''
                    if (lbl1.innerHTML==''){
                        btn.disabled=false
                    }
                }else if (data=='0'){
                    lbl2.innerHTML='Password must have Alphabet, Number and Symbol'
                    btn.disabled=true
                }else{
                    lbl2.innerHTML='error!!'
                }
            }
            checkPass()
        }
    }

    function onConfPassChange(e){
        const lbl1=document.getElementById('userNotAv')
        const lbl2=document.getElementById('wroPass')
        const lbl3=document.getElementById('notSame')
        const name=document.getElementById('name')
        const btn=document.getElementById('btnsub')
        if (e.target.value==document.getElementById('pswd').value){
            lbl3.innerHTML=''
            if (lbl1.innerHTML=='' && lbl2.innerHTML==''){
                btn.disabled=false
            }
        }else if(e.target.value!=document.getElementById('pswd').value){
            lbl3.innerHTML='Passwords are not matching'
            btn.disabled=true
        }else{
            lbl3.innerHTML='error!!'
        }
    }

  return (
    <div>
        <form action="http://192.168.0.6:8000/signup" method='post' autoComplete='off'>
            <div className="signupcard">
            <h1>SignUp</h1><br />
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" required placeholder='Name' className='form-control lg'/>
            <label htmlFor=""></label><br /><br />
            <label htmlFor="">UserName</label><br />
            <input type="text" name="user" id="user" required placeholder='UserID' autoComplete='off'  onChange={onUserChange} className='form-control lg' />
            <label htmlFor="" id='userNotAv' style={{fontSize:'smaller', color:'red'}}></label><br /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" name="pswd" placeholder='Password' required id="pswd" className='form-control lg' onChange={onPassChange}/>
            <label htmlFor="" id='wroPass' style={{fontSize:'smaller', color:'red'}}></label><br /><br />
            <label htmlFor="">Confirm Password</label><br />
            <input type="password" name="cnfpswd" placeholder='ReEnter Password' required id="cnfpswd" className='form-control lg' onChange={onConfPassChange}/>
            <label htmlFor="" id='notSame' style={{fontSize:'smaller', color:'red'}}></label><br /><br />
            <button type="submit" id="btnsub" className='btn btn-primary'>Sign Up</button><br />
            </div>
        </form>
    </div>
  )
}

export default Signup
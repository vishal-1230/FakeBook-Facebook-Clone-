import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import userpass from './userPass.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import userData from './userData.js'
import Posts from './Posts.js'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { resolve } from 'path'
import { Buffer } from 'buffer'

global.Buffer=Buffer
dotenv.config()

const app=express()
// app.use(express.json())
app.use(urlencoded({extended:false}))
app.use(cors({
    origin:'http://192.168.0.6:3000'
}))
app.use(cookieParser())
app.use(fileUpload())
app.set('view engine', 'ejs')

mongoose.connect('mongodb+srv://vishal:Cluster2004@cluster0.btbmdim.mongodb.net/userPass?retryWrites=true&w=majority', (err)=>console.log('connected'))
const db=mongoose.connection

app.get('/signup/checkUser', (req, res)=>{
    userpass.find({user:req.query.user}, (err, data)=>{
        console.log(data);
        if (err) throw err;
        if (data.length==0){
            res.json('1')
        }else{
            res.json('0')
        }
    })    
})

app.get('/signup/checkPass', (req, res)=>{
    const nums=[1,2,3,4,5,6,7,8,9,0]
    const alphas='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const pass=req.query.pass

    let haveNum=false
    let haveAlpha=false
    let haveSymb=true

    for (let i of pass){
        for (let i2 of nums){
            if (i==i2){
                haveNum=true
                break
            }
        }
    }
    for (let i3 of pass){
        for (let i4 of alphas){
            if (i3==i4){
                haveAlpha=true
                break
            }
        }
    }
    let alphanums=0
    for (let i5 of pass){
        for (let i6 of 'abcdefghijklmnopqrstuvwxyz1234567890'){
            if (pass!=''){
                if (i5==i6){
                    alphanums++
                }
            }
        }
    }

    if (alphanums==pass.length){
        haveSymb=false
    }else{
        haveSymb=true
    }

    if (haveAlpha && haveNum && haveSymb){
        res.json('1')
    }else{
        res.json('0')
    }

})

app.post('/signup', (req, res)=>{
    console.log('signing up');
    async function hashKar(){
        let hashedPass = await bcrypt.hash(req.body.pswd, 10)
        console.log(hashedPass.toString());
        userpass.create({user:req.body.user, pswd:hashedPass.toString()}, (err)=>{console.log(err);})
        userData.create({user:req.body.user, name:req.body.name})
        res.redirect('http://192.168.0.6:3000/login')
    }
    hashKar()
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    const pswd=req.body.pswd
    userpass.find({user:req.body.user}, (err, data)=>{
    if (data.length==0){
        console.log('doesnt exist');
        res.render('afterLogin.ejs', {exists:false, correct:false, key:''})
        res.end()
    }else{
        console.log('exists');
        userpass.find({user:req.body.user}, (err, data)=>{
            if (err) throw err;
            console.log(data);
            async function getCorr(){
                const corr=await bcrypt.compare(pswd, data[0].pswd)
                console.log(corr);
                let token=''
                if (corr){
                    token=jwt.sign({username:req.body.user}, process.env.TOKEN_SECRET, {expiresIn:'6h'})
                }
                res.render('afterLogin.ejs', {exists:true, correct:corr, key:token})
            }
            getCorr()
        }) 
    }
})
})

app.get('/getData', (req, res)=>{
    let user1=''
    
    user1=(jwt.verify(req.query.user, process.env.TOKEN_SECRET)).username
    // console.log(user1)
    userData.find({user:user1}, (err, data)=>{
        // console.log(data);
        res.json(data)
    })
})

app.post('/setDetails', (req, res)=>{
    const token=req.cookies.key
    const user=jwt.verify(token, process.env.TOKEN_SECRET).username
    console.log(user);
    console.log(req.body.dob)
    userData.findOneAndUpdate({user:user}, {dp:'', name:req.body.name, dob:req.body.dob, about:req.body.about}, (err, doc)=>{
        if(err) throw err;
        console.log(doc)
    })
    res.redirect('http://192.168.0.6:3000/dashboard')
})

app.get('/getSugg', (req, res)=>{
    const user=jwt.verify(req.query.user, process.env.TOKEN_SECRET).username
    console.log(user);
    let suggs=[]
    userData.find({}, (err, data)=>{
        for (let i of data){
            // console.log(i);
            if (suggs.length<20){
                if (i.user!=user){
                    suggs.push(i.name)
                }
            }
        }
        res.json(suggs)
    })
})

app.get('/getFrnds', (req, res)=>{
    const user=jwt.verify(req.query.user, process.env.TOKEN_SECRET).username
    const frnds=[]
    userData.find({user:user}, (err, data)=>{
        if(err) throw err;
        for (let i of data){
            frnds.push(i.name)
        }
        res.json(frnds)
    })
})

app.get('/addFrnd', (req, res)=>{
    const thisUser=jwt.verify(req.query.key, process.env.TOKEN_SECRET).username
    userData.find({name:req.query.name}, (err, data)=>{
        if(err) throw err;
        // console.log(data.friends.push(data.user));
        // userData.updateOne({name:req.query.name}, {friends:data.friends.push(data.user)})
        // userData.updateOne({user:thisUser}, {friends:})
        userData.find({user:thisUser}, (err, data2)=>{
            let oldFrnds=data2[0].friends
            console.log(oldFrnds);
            oldFrnds.push(data[0].name)
            console.log(oldFrnds);
            // userData.updateOne({user:thisUser}, {$set: {"friends":oldFrnds}})
            userData.findOneAndUpdate({user:thisUser}, {"friends":oldFrnds}, (err, doc)=>{
                if (err) throw err;
                console.log(doc);
            })
        })
    })
})


app.listen(8000)



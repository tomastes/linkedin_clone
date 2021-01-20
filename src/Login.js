import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth } from './firebase'
import './Login.css'
const Login = () => {
    // const history = useHistory()
    const dispatch = useDispatch()
const [name,setName] = useState('')
const [email, setEmail] = useState('')
const[password,setPassword] = useState('')
const[profilePic,setProfilePic] = useState("")
    const loginToApp =(e)=>{
        e.preventDefault()
     auth.signInWithEmailAndPassword(email,password)
     .then(userAuth=>{
       dispatch(  login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        photoUrl:userAuth.user.photoURL
         })
       )
     }).catch(e=>alert(e.message))
    }
    const register =()=>{
  
        if(!name||!email||!password){
            return alert ('fill required filleds up!🤽🏿‍♂️')
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL:profilePic
            }).then(()=>{
                dispatch(login({
                    email:userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    photoUrl:userAuth.user.photoURL
                }))
            })
        }).catch((e)=>{
            alert(e.message)
        })
    }
    return (
        <div className="login">
            <img src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png" alt=""/>
        <form action="">
            <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="full name required" />
            <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder="profile picture (optional" />
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="email  required" />
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="your password" />
            <button type="submit" onClick={loginToApp}>sign in</button>
        </form>
        <p>not a memeber?  {" "}
            <span className="login_register" onClick={register}>register Now</span>
        </p>
        </div>
    )
}

export default Login

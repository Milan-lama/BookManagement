import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Signin.css'
export default function Signin() {
    const Navigate = useNavigate()
    const [userInfo,setUserInfo] = useState({
        email:"",
        password:""
    })
    const handelChange = (event) =>{
        const{name,value} = event.target    
        setUserInfo({
            ...userInfo,
            [name]:value,
        })
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        Navigate('/dashboard')
    }
  return (
    <>
    <div className='formContainer'>
        <form onSubmit={handleSubmit} className='form'>
            <div className='title'>BookManager</div>
            <input
                type='email'
                placeholder='Email'
                name='email'
                value={userInfo.email}
                onChange={handelChange}
                required
            />
            <input
                type='password'
                placeholder='Password'
                name='password'
                value={userInfo.password}
                onChange={handelChange}
                required
            />
            <button type='submit'>Sign In</button>
            <p>You don't have an account?<Link to='/signup'>Sign up</Link></p>
        </form>
    </div>
    </>
  )
}

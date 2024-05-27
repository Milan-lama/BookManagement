import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
export default function () {
    const Navigate = useNavigate()
    const [userInfo,setUserInfo] = useState({
        username:'',
        email:'',
        password:''
    })
    const handelChange = (event) =>{
        const {name,value} = event.target
        setUserInfo({
            ...userInfo,
            [name]:value
        })
    }
    const handelSubmit = (event) =>{
        event.preventDefault()
        Navigate('/signin')
    }
  return (
    <>
        <div className='formContainer'>
            <form onSubmit={handelSubmit} className='form'>
            <div className='title'>BookManager</div>
                <input
                    type='text'
                    placeholder='Username'
                    value={userInfo.username}
                    onChange={handelChange}
                    required
                />
                <input
                    type='email'
                    placeholder='Email'
                    value={userInfo.email}
                    onChange={handelChange}
                    required
                />
                <input
                    type='password'
                    placeholder='password'
                    value={userInfo.password}
                    onChange={handelChange}
                    required
                />
                <button type='submit'>Sign Up</button>
                <p>Already have an account?<Link to='/'>Log in</Link></p>
            </form>
        </div>
    </>
  )
}

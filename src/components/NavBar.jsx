import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'
export default function NavBar() {
    const navigate = useNavigate()
  return (
    <div className='navbar'>
        <div className="username">Welcome,@username</div>
        <button className="logout-button" onClick={()=>{navigate('/')}}>Logout</button>
    </div>
  )
}

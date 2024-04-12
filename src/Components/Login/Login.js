import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Link to="/login" className='login'>Log In</Link>
  )
}

export default Login
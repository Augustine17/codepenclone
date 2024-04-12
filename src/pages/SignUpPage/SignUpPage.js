import React from 'react'
import './SignUpPage.css'

import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'

import SignUpForm from '../../Components/SignUpForm/SignUpForm'

const SignUpPage = () => {
  return (
    <div style={{display:"flex"}}>
    <Sidebar />
    <div className='together'>
        <Header />
        <SignUpForm />
    </div>
    
    </div>
  )
}

export default SignUpPage
import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import LogInForm from '../../Components/LoginForm/LogInForm'

const LogInPage = () => {
  return (
    <div style={{display:"flex"}}>
    <Sidebar />
    <div className='together'>
        <Header />
        <LogInForm />
    </div>
    
    </div>
  )
}

export default LogInPage
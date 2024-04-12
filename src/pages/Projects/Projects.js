import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import IndiviualProject from '../../Components/IndiviualProject/IndiviualProject'
import './Projects.css'

const Projects = () => {
  return (
    <div style={{display:"flex"}}>
    <Sidebar />
    <div className='together'>
        <Header />
        <IndiviualProject />
    </div>
    
    </div>
  )
}

export default Projects
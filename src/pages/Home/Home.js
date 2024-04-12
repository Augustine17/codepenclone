import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner'

import './Home.css'

const Home = () => {
  return (
    <div style={{display:"flex"}}>
    <Sidebar />
    <div className='together'>
        <Header />
        <Banner />
    </div>
    
    </div>
  )
}

export default Home
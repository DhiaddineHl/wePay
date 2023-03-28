import React from 'react'
import BalanceBox from '../components/homePage/BalanceBox'
import Footer from '../components/homePage/Footer'
import Navbar from '../components/homePage/NavBar'
import OperationBox from '../components/homePage/OperationBox'

const Dashboard = () => {
  return (
    <div className="page"
    style={{display : 'flex', flexDirection: 'column', minHeight : '100vh'}}>
      <Navbar></Navbar>
      <div className="pageBody"
      style={{display : 'flex', justifyContent : 'center', marginBottom : 'auto'}}>
        
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Dashboard
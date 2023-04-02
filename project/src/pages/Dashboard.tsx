import React from 'react'
import BalanceBox from '../components/homePage/BalanceBox'
import Footer from '../components/homePage/Footer'
import Navbar from '../components/homePage/NavBar'
import OperationBox from '../components/homePage/OperationBox'
import BalanceDashboard from '../components/homePage/BalanceDashboard'
import ResendBox from '../components/homePage/ResendBox'
import ActivitiesBox from '../components/homePage/ActivitiesBox'

const Dashboard = () => {
  return (
    <div className="page"
        style={{display : 'flex', flexDirection: 'column', minHeight : '100vh'}}>
          <Navbar></Navbar>
      <div className="pageBody"
      style={{display : 'flex', flexDirection : "column", marginBottom : 'auto'}}>
        <div className="bodyOne" style={{display : 'flex', justifyContent : 'center'}} >

          <BalanceDashboard></BalanceDashboard>
          <ResendBox></ResendBox>
        </div>
      <div className="bodyTwo" style={{display : 'flex', justifyContent : 'center'}} >
        <ActivitiesBox></ActivitiesBox>
      </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Dashboard
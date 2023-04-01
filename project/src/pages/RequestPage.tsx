import React from 'react'
import BalanceBox from '../components/homePage/BalanceBox'
import Footer from '../components/homePage/Footer'
import Navbar from '../components/homePage/NavBar'
import OperationBox from '../components/homePage/OperationBox'

const RequestPage = () => {
  return (
    <div className="page"
    style={{display : 'flex', flexDirection: 'column', minHeight : '100vh'}}>
      
      <div className="pageBody"
      style={{display : 'flex', justifyContent : 'center', marginBottom : 'auto'}}>
        <OperationBox heading='Request'></OperationBox>
        <BalanceBox></BalanceBox>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default RequestPage
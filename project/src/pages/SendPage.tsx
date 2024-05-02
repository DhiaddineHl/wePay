import BalanceBox from '../components/homePage/BalanceBox'
import Footer from '../components/homePage/Footer'
import Navbar from '../components/homePage/NavBar'
import OperationBox from '../components/homePage/OperationBox'


const SendPage = () => {
  return (
    
    <div className="page"
    style={{display : 'flex', flexDirection: 'column', minHeight : '100vh'}}>
      
      <Navbar/>
      <div className="pageBody"
      style={{display : 'flex', justifyContent : 'center', marginBottom : 'auto'}}>
        <OperationBox heading='Send'/>
        <BalanceBox/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default SendPage
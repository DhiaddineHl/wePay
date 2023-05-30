import  { useQuery } from '@tanstack/react-query'
import './boxStyle.css'
import useBalance from '../../hooks/useBalance';


const BalanceBox = () => {



    const userID = localStorage.getItem('userId');
    const userId = userID?.toString();
  
    const {data : balance} = useBalance(userId)




  return (
    <div className="balanceBox">
        <div className="boxHeader">
            <span className='title' >
                Balance
            </span>
        </div>
        <div className="boxBody">
            <span className="balance">
                {balance}  <b>TND</b>
            </span>
            <p>
                Estimated total of all currencies
            </p>
        </div>
    </div>
  )
}

export default BalanceBox
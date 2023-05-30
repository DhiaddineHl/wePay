
import './boxStyle.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import useBalance from '../../hooks/useBalance';

const BalanceDashboard = () => {
    
    const navigate = useNavigate();

    const userID = localStorage.getItem('userId');
    const userId = userID?.toString();
    const {data : balance} = useBalance(userId);

  return (
    <div className="balanceBox" style={{width : "40%"}}>
        <div className="boxHeader">
            <span className='title' >
                Balance
            </span>
        </div>
        <div className="boxBody">
            <span className="balance">
                {balance} <b>TND</b>
            </span>
            <p>
                Estimated total of all currencies
            </p>
            <button className="submit" style={{marginRight : '1rem'}} onClick={() => navigate('/send')}>Send</button>
            <button className="submit" onClick={() => navigate('/request')}>Request</button>
        </div>
    </div>
  )
}

export default BalanceDashboard
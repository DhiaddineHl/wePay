import useBalance from '../../hooks/useBalance';
import './boxStyle.css'
import { useNavigate } from 'react-router-dom'


const BalanceDashboard = () => {
    
    const navigate = useNavigate();
    const {data : balance} = useBalance();

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
import './boxStyle.css'
import useBalance from '../../hooks/useBalance';


const BalanceBox = () => {

    const {data : balance} = useBalance();

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
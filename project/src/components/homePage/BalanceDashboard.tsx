import React from 'react'
import './boxStyle.css'

const BalanceDashboard = () => {
    

  return (
    <div className="balanceBox" style={{width : "40%"}}>
        <div className="boxHeader">
            <span className='title' >
                Balance
            </span>
        </div>
        <div className="boxBody">
            <span className="balance">
                35.20 $ <b>CAD</b>
            </span>
            <p>
                Estimated total of all currencies
            </p>
            <button className="submit" style={{marginRight : '1rem'}}>Send</button>
            <button className="submit">Request</button>
        </div>
    </div>
  )
}

export default BalanceDashboard
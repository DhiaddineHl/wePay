import React from 'react'
import './boxStyle.css'

const BalanceBox = () => {
  return (
    <div className="balanceBox">
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
        </div>
    </div>
  )
}

export default BalanceBox
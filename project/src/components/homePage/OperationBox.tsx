import React from 'react'
import './boxStyle.css'

const OperationBox = () => {
  return (
    <div className="box">
        <div className="boxHeader">
            Send
        </div>
        <div className="boxBody">
            <div className="input">
                <input type="email" placeholder='USER E-MAIL ADDRESS' />
                <input type="number" placeholder='$' />
            </div>
            <button>Send</button>
        </div>
    </div>
  )
}

export default OperationBox
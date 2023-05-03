import React, { useEffect, useState } from 'react'
import './boxStyle.css'
import axios from 'axios'

const BalanceBox = () => {


    const [balance, setBalance] = useState(null)
    const token = localStorage.getItem('token');
    const userID = localStorage.getItem('userId');
    const userId = userID?.toString();
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;


    useEffect(() => {
        axios.get("/api/v1/users/balance/"+userId, {
        })
        .then(res => {
            console.log(res.data)
            setBalance(res.data) 
        })

    },[token])




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
import React, { useEffect, useState } from 'react'
import './boxStyle.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const BalanceDashboard = () => {
    
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null)
    const token = localStorage.getItem('token')
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

    },[token, userID])

    


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
import React, { useEffect, useState } from 'react'
import './boxStyle.css'

import Activities from "../../data/activities.json"

import axios from 'axios'




interface Operation {
    Date : string
    StoreName : string
    Amount : string
    Currency : string
    
}

const ActivitiesBox = () => {

     const [operations, setOperations] = useState<Operation[]>([]);
    const userId = localStorage.getItem("userId");
    const userID = userId?.toString();
    const token = localStorage.getItem('token')

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    useEffect(() => {
        axios.get<Operation[]>("/api/v1/payment/payments/formatted/"+userID , {

        })
        .then(res =>setOperations(res.data))
    }, [token, userID]) 


  return (
    <div className="box" style={{width : "69vw", marginTop :"0"}}>
        <div className="boxHeader">
            <span className='title'>
                Recent Activities
            </span>
        </div>
        <div className="boxBody" style={{margin :"0", padding : "0"}}>
            {operations.map(op =>
            <div className="boxItem" key={op.StoreName}>
                
                <div style={{display : "flex", justifyContent : "space-between", width : "97%"}}>
                    <div style={{display : "flex", flexDirection: "column", justifyContent: "center"}}>
                        <span className="name">{op.StoreName}</span>
                        <span style={{fontWeight : "300", marginLeft: "1rem"}}>{op.Date}</span>
                    </div>
                    <span>
                        <span style={{fontWeight : "300", fontSize : "25px"}}>-{op.Amount}</span> <b style={{fontSize : "25px"}}>{op.Currency}</b>
                    </span>
                </div>
            </div>
                )}
        </div>
    </div>
  )
}

export default ActivitiesBox
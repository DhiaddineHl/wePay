import React, { useEffect, useState } from 'react'
import './boxStyle.css'
import { Avatar } from '@mui/material'

import axios from 'axios'


type User = {
    name : string
}

interface Operation {
    type : string,
    amount : number
}

interface Activity {
    date : string
    user : User
    operation : Operation
}

const ActivitiesBox = () => {

    const [operations, setOperations] = useState<Activity[]>([]);
    useEffect(() => {
        axios.get<Activity[]>('http://localhost:8080/activities')
        .then(res =>setOperations(res.data))
    }, [])


  return (
    <div className="box" style={{width : "70%", marginTop :"0"}}>
        <div className="boxHeader">
            <span className='title'>
                Recent Activities
            </span>
        </div>
        <div className="boxBody" style={{margin :"0", padding : "0"}}>
            {operations.map(op =>
            <div className="boxItem" key={op.user.name}>
                <Avatar>{op.user.name[0]}</Avatar>
                <div style={{display : "flex", justifyContent : "space-between", width : "90%"}}>
                    <div style={{display : "flex", flexDirection: "column", justifyContent: "center"}}>
                        <span className="name">{op.user.name}</span>
                        <span style={{fontWeight : "300", marginLeft: "1rem"}}>{op.date}</span>
                    </div>
                    <span>
                        <span style={{fontWeight : "300", fontSize : "25px"}}>{op.operation.type === 'send'? "-" : "+"}{op.operation.amount}$</span> <b style={{fontSize : "25px"}}>CAD</b>
                    </span>
                </div>
            </div>
                )}
        </div>
    </div>
  )
}

export default ActivitiesBox
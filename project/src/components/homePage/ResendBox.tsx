import React from 'react'
import './boxStyle.css'
import { Avatar } from '@mui/material'
import { blueGrey, deepOrange, deepPurple } from '@mui/material/colors'






const ResendBox = () => {
  return (
    <div className="box" style={{width : "25%"}}>
        <div className="boxHeader">
            <span className='title'>
                Resend
            </span>
        </div>
        <div className="boxBody" style={{margin :"0", padding : "0"}}>
            <div className="boxItem">
                <Avatar sx={{ bgcolor : deepPurple[500]}}>DB</Avatar>
                <span className="name">Dorra BHK</span>
            </div>
            <div className="boxItem-last">
                <Avatar sx={{ bgcolor : deepOrange[200]}} >DH</Avatar>
                <span className="name">Dhiaddine Hlaoui</span>
            </div>
        </div>
    </div>
  )
}

export default ResendBox
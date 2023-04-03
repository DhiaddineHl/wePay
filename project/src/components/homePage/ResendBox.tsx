import React from 'react'
import './boxStyle.css'

import Activities from "../../data/activities.json"


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
                
                <span className="name">Dorra BHK</span>
            </div>
            <div className="boxItem-last">
                
                <span className="name">Dhiaddine Hlaoui</span>
            </div>
        </div>
    </div>
  )
}

export default ResendBox
import React from 'react'

import './formStyle.css'

const BusinessForm = () => {
  return (
    <div className="businessForm">
          <div className="texts">
              <span className='userType'>
                Business
              </span>
              <h2 className='tellUs'>
                Tell us about your store!
              </h2>
              <p className='informations'>
                These are intial informations about your store,<br></br> you can change them anytime!
              </p>
          </div>
          <form  className='form' action="">
            <input type="text" placeholder='Store Name' />
            <input type="text" placeholder='Industry' />
            <input type="text" placeholder='Company legal name' />
            <input type="text" placeholder='Country' />
            <input type="text" placeholder='Adress' />
            <div className="half-width-input">
              <input type="text" placeholder='ZIP Code' />
              <input type="text" placeholder='City' />
            </div>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <div className="buttons">
              <button className='goBack'>Go Back</button>
              <button type="submit" className='SaveData'>Save</button>
            </div>
          </form>
        </div>
  )
}

export default BusinessForm

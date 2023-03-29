
import React from 'react'
import './formStyle.css'

const ParticularForm = () => {
  return (
    <div className='particularForm'>
        <div className="texts">
              <span className='userType'>
                Particular
              </span>
              <h2 className='tellUs'>
                Tell us about your yourself!
              </h2>
              <p className='informations'>
                These are intial informations about your store,<br></br> you can change them anytime!
              </p>
        </div>
          <form  className='form' action="">
            <input type="text" placeholder='Full Name' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Country' />
            <div className="half-width-input">
              <input type="text" placeholder='ZIP Code' className='zip-code'/>
              <input type="text" placeholder='City' className='city' />
            </div>
            <input type="text" placeholder='Adress' />
            <div className="buttons">
              <button className='goBack'>Go Back</button>
              <button type="submit" className='SaveData'>Save</button>
            </div>
          </form>
      </div>
  )
}

export default ParticularForm
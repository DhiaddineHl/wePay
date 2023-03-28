import React from 'react'
import './boxStyle.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';


interface Props {
  heading : string
}

const OperationBox = ({ heading }: Props) => {

  
  return (
    
      <div className="box">
          <div className="boxHeader">
              <span className="operation">
                {heading}
              </span>
          </div>
          <div className="boxBody">
                <div className="input">
                <Grid container spacing={3}>
                  <Grid item>
                    <TextField id="standard-basic" label="Email Address" variant="standard"/>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Amount"
                      id="standard-start-adornment"
                      sx={{ m: 0, width: '10ch' }}
                      InputProps={{
                      startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    
                      }}
                      variant="standard"/>
                  </Grid>
                </Grid>
              </div>
              <button className='submit'>
                {heading}
              </button>
          </div>
      </div>
    
  )
}

export default OperationBox
import React from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './boxStyle.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid';


const schema = z.object({
  email : z.string().email(),
  amount : z.number({ invalid_type_error : "Amount field is required"}).min(1, {message : "Please enter a valid amount"})
})

type FormData = z.infer<typeof schema>
interface Props {
  heading : string
}

const OperationBox = ({ heading }: Props) => {

  const {register, handleSubmit, formState : {errors, isValid}} = useForm<FormData>({resolver : zodResolver(schema)});

  return (
      <div className="box">
          <div className="boxHeader">
              <span className="operation">
                {heading}
              </span>
          </div>
          <div className="boxBody">
                <form onSubmit={handleSubmit(data => console.log(data))}>
                  <div className="input">
                  <Grid container spacing={3}>
                    <Grid item>
                      <TextField {...register('email')} id="standard-basic" label="Email Address" variant="standard"/>
                      {errors.email && <p className='error-message'>{errors.email.message}</p> }
                    </Grid>
                    <Grid item>
                      <TextField
                        {...register('amount', {valueAsNumber : true})}
                        label="Amount"
                        id="standard-start-adornment"
                        sx={{ m: 0, width: '10ch' }}
                        InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  
                        }}
                        variant="standard"/>
                        {errors.amount && <p className='error-message'>{errors.amount.message}</p> }
                    </Grid>
                  </Grid>
                  </div>
                  <button className='submit' disabled={!isValid}>
                    {heading}
                  </button>
                </form>
          </div>
      </div>
    
  )
}

export default OperationBox
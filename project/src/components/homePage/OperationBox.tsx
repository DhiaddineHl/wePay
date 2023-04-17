import React from 'react'
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import './boxStyle.css'


import { Box, HStack, Input } from '@chakra-ui/react'


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
                    <HStack>
                    <Input {...register("email")} variant="flushed" placeholder="E-mail" _placeholder={{opacity : "0.2", color : "inherit"}} ></Input>
                    
                    <Box width={8}></Box>
                    <Input {...register("amount")} variant="flushed" type="number" placeholder="Amount" _placeholder={{opacity : "0.2", color : "inherit"}}  width="auto"></Input>
                    
                    </HStack>
                    
                  </div>
                  <button className='submit'>
                    {heading}
                  </button>
                </form>
          </div>
      </div>
    
  )
}

export default OperationBox
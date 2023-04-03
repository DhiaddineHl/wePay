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
                    <Input variant="flushed" placeholder="E-mail" _placeholder={{opacity : "0.2", color : "inherit"}} ></Input>
                    <Box width={8}></Box>
                    <Input variant="flushed" type="number" placeholder="Amount" _placeholder={{opacity : "0.2", color : "inherit"}} htmlFor={16} width="auto"></Input>
                    </HStack>
                    
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
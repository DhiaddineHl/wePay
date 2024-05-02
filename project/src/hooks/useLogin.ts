import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import authClient from "../services/authClient";



interface AuthRequest {
    email : string,
    password : string
  }
  
  interface Response {
    access_token : string,
  }

const useLogin = () => {

    const navigate = useNavigate();
    const toast  = useToast();

    return useMutation({
        mutationFn : (request : AuthRequest) =>
          authClient
          .post<Response>("login", request)
          .then(res =>{ 
            localStorage.setItem('token', res.data.access_token)

          }),
          onSuccess : () => {
            navigate('/dashboard')
            toast({
              title: 'Welcome Again',
              description: "You signed in successfully",
              status: 'success',
              duration: 5000,
              isClosable: true,
            })
          }
            
          }
      )

}

export default useLogin;
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'



interface Credentials {
    email : string,
    password : string
  }
  
  interface Response {
    access_token : string,
    id : string
  }

const useLogin = () => {

    const navigate = useNavigate();
    const toast  = useToast();

    return useMutation({
        mutationFn : (user : Credentials) =>
          axios
          .post<Response>("/api/v1/auth/authenticate", user)
          .then(res =>{ 
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('userId', res.data.id)
            navigate('/dashboard')
          }),
          onSuccess : () =>
          toast({
            title: 'Welcome Again',
            description: "You signed in successfully",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          }
      )

}

export default useLogin;
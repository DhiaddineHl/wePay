import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface UserInformations {
    storeName : string,
    industry : string,
    phone : string,
    email : string,
    password : string
}

interface Response {
    access_token : string,
    id : string
}

const useRegisterBusiness = () => {

    const navigate = useNavigate();
    const toast  = useToast();

    return useMutation({
        mutationFn : (user : UserInformations) =>
          axios
          .post<Response>("/api/v1/auth/register/particular", user)
          .then(res =>{ 
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('userId', res.data.id)
            navigate('/dashboard')
          }),
          onSuccess : () =>
          toast({
            title: 'Welcome to WePay',
            description: "We've created your account for you",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          }
      )

}

export default useRegisterBusiness;
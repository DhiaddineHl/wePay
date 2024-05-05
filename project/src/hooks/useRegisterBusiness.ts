import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authClient from "../services/authClient";


interface RegisterRequest {
    name : string,
    business_name : string,
    email : string,
    password : string,
    tax_registration_number : string
}

interface Response {
    access_token : string,
}

const useRegisterBusiness = () => {

    const navigate = useNavigate();
    const toast  = useToast();

    return useMutation({
        mutationFn : (request : RegisterRequest) =>
          authClient
          .post<Response>("register-business", request)
          .then(res =>{ 
            localStorage.setItem('token', res.data.access_token)
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
import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";


interface RegisterRequest {
    firstName : string,
    lastName : string,
    phone : string,
    email : string,
    password : string,
    ICN  : string,
}

interface Response {
    access_token : string,
}

const useRegisterParticular = () => {

    const navigate = useNavigate();
    const toast  = useToast();

    return useMutation({
        mutationFn : (request : RegisterRequest) =>
          axios
          .post<Response>("register-particular", request)
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

export default useRegisterParticular;
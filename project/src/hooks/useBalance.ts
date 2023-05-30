

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const useBalance = (userId : string | undefined ) => {


    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const fetchBalance = () => {
        return axios.get<number>("/api/v1/users/balance/"+userId)
        .then(res => res.data)
    }

    return useQuery<number>({
        queryKey : ['users',userId,'balance'],
        queryFn : fetchBalance
    })

}

export default useBalance;
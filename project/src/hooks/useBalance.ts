import { useQuery } from '@tanstack/react-query'
import apiClient from '../services/apiClient'


const useBalance = () => {

    const fetchBalance = () => {
        
        return apiClient
        .get<number>("users/balance")
        .then(res => res.data)
    }

    return useQuery<number>({
        queryKey : ['balance'],
        queryFn : fetchBalance
    })

}

export default useBalance;
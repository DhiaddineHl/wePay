import { useQuery } from '@tanstack/react-query'
import axios from 'axios'



interface Operation {
    Date : string
    StoreName : string
    Amount : string
    Currency : string  
}

const useActivities = (userID : string | undefined) => {

    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const fetchActivities = () => 
         axios
            .get<Operation[]>("/api/v1/payment/payments/formatted/"+userID)
            .then((res) =>(res.data))
    

    return useQuery<Operation[]>({
        queryKey : ['users', userID, 'activities'],
        queryFn : fetchActivities
    })

}

export default useActivities;
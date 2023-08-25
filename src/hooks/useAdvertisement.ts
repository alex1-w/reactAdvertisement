import { useQuery } from "react-query"
import { advertisementService } from "../services/advertisementService/advertisementService"
import { useNavigate } from "react-router-dom"


export const useAdvertisement = (id: string) => {
    const navigate = useNavigate()

    return useQuery(
        ['getAdvertisement'],
        () => advertisementService.getAdvertisement(id),
        {
            onError: () => {
                navigate('/not-found')
            },
            retry: false
        }
    )
}
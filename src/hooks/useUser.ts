import { useQuery } from "react-query"
import { userService } from "../services/userService/userService"

export const useUser = () => {
    return useQuery(
        ['getUserInfo'],
        () => userService.getUserInfo(),
        {
            retry: false
        }
    )
}
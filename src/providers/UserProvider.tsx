import { FC, createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useUser } from "../hooks/useUser";
import { useQuery } from "react-query";
import { userService } from "../services/userService/userService";

interface IUserContext {
    isAuth: boolean
    exit: () => void
    setIsAuth: (user: boolean) => void
    isLoading: boolean
}

export const UserContext = createContext<IUserContext>({
    // isAuth: Boolean(Cookies.get('userToken')),
    isAuth: false,
    exit: () => { return null },
    setIsAuth: (user: boolean) => { return null },
    isLoading: false
})

export const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)

    const { isLoading } = useQuery(
        ['checkAuth'],
        () => userService.checkAuth(),
        {
            onSuccess: () => { setIsAuth(true) },
            retry:false
        }
    )

    const exit = () => {
        setIsAuth(false)
        Cookies.remove('userToken')
    }

    return (
        <UserContext.Provider value={{ isAuth, exit, setIsAuth, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)
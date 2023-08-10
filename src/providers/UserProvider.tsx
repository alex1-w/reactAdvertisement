import { FC, createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

interface IUserContext {
    isAuth: boolean
    exit: () => void
    setIsAuth: (user: boolean) => void
}

export const UserContext = createContext<IUserContext>({
    isAuth: Boolean(Cookies.get('userToken')),
    exit: () => { return null },
    setIsAuth: (user: boolean) => { return null }
})

export const UserProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(Boolean(Cookies.get('userToken')))

    const exit = () => {
        setIsAuth(false)
        Cookies.remove('userToken')
    }

    return (
        <UserContext.Provider value={{ isAuth, exit, setIsAuth }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}
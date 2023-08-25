import { useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { useUserContext } from "./UserProvider"
import { Navigate, useNavigate } from "react-router-dom"
import PreloaderPage from "../components/PreloaderPage/PreloaderPage"

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const { isAuth, isLoading } = useUserContext()

    useEffect(() => {
        if (isLoading && !isAuth) {
            <PreloaderPage />
        } else if (!isLoading && !isAuth) {
            navigate(-1)
        }
    }, [isLoading, isAuth, navigate])


    if (isLoading) { return <PreloaderPage /> }


    return (
        <>{children}</>
    )
}
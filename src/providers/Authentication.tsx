import React, { FC, createContext, useState, useContext } from "react";

type variant = 'login' | 'signin'

interface IAuthenticationWrapperContext {
    pageVariant: variant
    changeWrapper: (_variant: variant) => void
}

const AuthenticationWrapperContext = createContext<IAuthenticationWrapperContext>({
    pageVariant: 'login',
    changeWrapper: (_variant: variant) => { return null }
})


export const useAuthenticationWrapperContext = () => { return useContext(AuthenticationWrapperContext) }

export const AuthenticationWrapperProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [pageVariant, setPageVariant] = useState<variant>('login')
    const changeWrapper = (variant: variant) => setPageVariant(variant)

    return (
        <AuthenticationWrapperContext.Provider value={{ changeWrapper, pageVariant }}>

            {children}
        </AuthenticationWrapperContext.Provider>
    )
}
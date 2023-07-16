import React, { Dispatch, SetStateAction, createContext, useState, useContext, FC } from "react";

// type TypeSetState<T> = Dispatch<SetStateAction<T>>
interface IThemeProvider {
    children: React.ReactNode
}

interface IThemeContext {
    type: "light" | "dark"
    changeOnDark: () => void
    changeOnLight: () => void
    // setType: TypeSetState<string>
}

export const ThemeContext = createContext<IThemeContext>({
    type: "light",
    changeOnDark: () => { return null },
    changeOnLight: () => { return null }
})
export const useThemeProvider = () => { return useContext(ThemeContext) }

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {

    const [type, setType] = useState<"light" | "dark">("light")

    const changeOnDark = () => {
        setType('dark')
        console.log("dark");
    }
    const changeOnLight = () => {
        setType('light')
        console.log('light');
    }

    return (
        <ThemeContext.Provider value={{ changeOnDark, type, changeOnLight }}>
            {children}
        </ThemeContext.Provider>
    )
}


import { Outlet } from "react-router-dom"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { useThemeProvider } from "../providers/ThemeContext"
import cn from 'classnames'
import { useEffect } from "react"


export const Layout = () => {
    const { theme } = useThemeProvider()

    useEffect(() => {
        const root = document.querySelector(':root') as any
        if (root) {
            // console.log(root);
            
            if (theme === 'dark') {
                root.style.setProperty(
                    '--primary-bg', 'rgb(27, 27, 27)'
                )
            }
            if (theme === 'light') { }
        }
    }, [theme])

    return (
        <div className={cn('layout', { dark: theme === 'dark' })}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
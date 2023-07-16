import { Outlet } from "react-router-dom"
import { Footer } from "./Footer/Footer"
import { Header } from "./Header/Header"
import { useThemeProvider } from "../providers/ThemeContext"
import cn from 'classnames'
import { useEffect } from "react"


export const Layout = () => {
    const { type } = useThemeProvider()

    useEffect(() => {
        const root = document.querySelector(':root') as any
        if (root) {
            console.log(root);
            
            if (type === 'dark') {
                root.style.setProperty(
                    '--primary-bg', 'rgb(27, 27, 27)'
                )
            }
            if (type === 'light') { }
        }
    }, [type])

    return (
        <div className={cn('layout', { dark: type === 'dark' })}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}
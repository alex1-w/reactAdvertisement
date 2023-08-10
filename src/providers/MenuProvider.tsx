import { FC, createContext, useContext, useState } from "react"

interface IMenuContext {
    closeMenu: () => void
    openMenu: () => void
    isMenuOpened: boolean
    menuHandler: () => void
}

export const MenuContext = createContext<IMenuContext>({
    closeMenu: () => { return null },
    openMenu: () => { return null },
    isMenuOpened: false,
    menuHandler: () => { return null },
})

export const MenuProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const closeMenu = () => setIsMenuOpened(false)
    const openMenu = () => setIsMenuOpened(true)

    const menuHandler = () => {
        setIsMenuOpened(!isMenuOpened)
        console.log(324324);
    }

    return (
        <MenuContext.Provider value={{ isMenuOpened, menuHandler, closeMenu, openMenu }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuProvider = () => { return useContext(MenuContext) }
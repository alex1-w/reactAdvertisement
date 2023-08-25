//@ts-ignore
import styles from './BurgerMenu.module.scss';
import { useRef, useEffect } from 'react';
import { Navigation } from '../../Navigation/Navigation';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { DrawerMenu } from '../DrawerMenu/DrawerMenu';
import { InputSearch } from '../InputSearch/InputSearch';
import { useMenuProvider } from '../../../providers/MenuProvider';
import { useOnClickOutside } from '../../../hooks/useClickOutside';

export const BurgerMenu = () => {
    const { isMenuOpened, menuHandler, closeMenu } = useMenuProvider()
    const burgerMenuRef = useRef<HTMLDivElement>(null)

    const menuRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(menuRef, closeMenu)

    const changeMenu = () => { menuHandler() }

    useEffect(() => {
        if (isMenuOpened === true) burgerMenuRef.current?.classList.add(styles.opened)
        burgerMenuRef.current?.classList.remove(styles.opened)

    }, [isMenuOpened])

    return (
        <div className={styles.main} ref={menuRef}>
            <div
                className={styles.burger}
                onClick={changeMenu}
                ref={burgerMenuRef}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {
                isMenuOpened &&
                <DrawerMenu>
                    <InputSearch inputVariant='burgerMenuVariant' />
                    <Navigation variant='burgerMenuVariant' />
                    <ThemeButton />
                </DrawerMenu>
            }
        </div>
    )
}
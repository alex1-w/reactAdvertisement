//@ts-ignore
import styles from './BurgerMenu.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Blackout } from '../../Blackout/Blackout';
import { Navigation } from '../../Navigation/Navigation';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { DrawerMenu } from '../DrawerMenu/DrawerMenu';
import { InputSearch } from '../InputSearch/InputSearch';
import { useMenuProvider } from '../../../providers/MenuProvider';

export const BurgerMenu = () => {
    const { closeMenu, isMenuOpened, openMenu, menuHandler } = useMenuProvider()
    const burgerMenuRef = useRef<HTMLDivElement>(null)

    const changeMenu = () => {
        // burgerMenuRef.current?.classList.toggle(styles.opened)
        menuHandler()
    }

    useEffect(() => {
        if (isMenuOpened === true) {
            burgerMenuRef.current?.classList.add(styles.opened)
        }
        if (isMenuOpened === false) {
            burgerMenuRef.current?.classList.remove(styles.opened)
        }
    }, [isMenuOpened])

    return (
        <>
            <div className={styles.main} onClick={changeMenu} ref={burgerMenuRef} >
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
        </>
    )
}
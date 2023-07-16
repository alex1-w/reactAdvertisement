//@ts-ignore
import styles from './BurgerMenu.module.scss';
import { useState, useRef } from 'react';
import { Blackout } from '../../Blackout/Blackout';
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '../../Navigation/Navigation';
import { ThemeButton } from '../ThemeButton/ThemeButton';
import { TextField } from '@mui/material'
import { DrawerMenu } from '../DrawerMenu/DrawerMenu';
import { InputSearch } from '../InputSearch/InputSearch';

export const BurgerMenu = () => {
    const [menuIsOpened, setMenuIsOpened] = useState<boolean>(false)
    const burgerMenuRef = useRef<HTMLDivElement>(null)

    const openMenu = () => {
        burgerMenuRef.current?.classList.toggle(styles.opened)
        setMenuIsOpened(!menuIsOpened)
    }

    return (
        <>
            <div
                className={styles.main}
                onClick={openMenu}
                ref={burgerMenuRef}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            {menuIsOpened &&

                <DrawerMenu>
                    <>
                        {/* <TextField type='search' variant='standard' color='warning' label='Search...' className={styles.inputItem} size='small' /> */}
                        <InputSearch inputVariant='burgerMenuVariant' />
                        <Navigation variant='burgerMenuVariant' />
                        <ThemeButton />
                    </>
                </DrawerMenu>

            }




        </>
    )
}
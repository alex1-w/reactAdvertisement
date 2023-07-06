import { Menu } from '@mui/material';
import styles from './BurgerMenu.module.scss';
import { useState, useRef } from 'react';
import { Blackout } from '../../Blackout/Blackout';
import { AnimatePresence, motion } from 'framer-motion'
import { Navigation } from '../../Navigation/Navigation';

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
            {/* {menuIsOpened && <Blackout />} */}
            {menuIsOpened &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    <Navigation variant='burgerMenuVariant' />

                </motion.div>
            }
        </>
    )
}
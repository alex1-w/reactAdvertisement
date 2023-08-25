//@ts-ignore
import styles from './DrawerMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useRef } from 'react';
import { useOnClickOutside } from '../../../hooks/useClickOutside';
import { useMenuProvider } from '../../../providers/MenuProvider';

interface IDrawerMenuProps {
    children: React.ReactNode
}

const variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export const DrawerMenu: FC<IDrawerMenuProps> = ({ children }) => {
    const { isMenuOpened, menuHandler, closeMenu } = useMenuProvider()


    return (
        <AnimatePresence>
            {isMenuOpened &&

                <motion.div
                    className={styles.main}
                    variants={variants}
                    initial='hidden'
                    animate='visible'
                    exit={{ opacity: 1 }}
                >
                    <div className={styles.content}>
                        {children}
                    </div>
                </motion.div>

            }

        </AnimatePresence>
    )
}
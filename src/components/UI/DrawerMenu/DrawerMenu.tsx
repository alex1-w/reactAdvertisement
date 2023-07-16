//@ts-ignore
import styles from './DrawerMenu.module.scss';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface IDrawerMenuProps {
    children: React.ReactNode
}

export const DrawerMenu: FC<IDrawerMenuProps> = ({ children }) => {
    return (



        <motion.div
            className={styles.main}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className={styles.content}>
                {children}
            </div>
        </motion.div>

    )
}
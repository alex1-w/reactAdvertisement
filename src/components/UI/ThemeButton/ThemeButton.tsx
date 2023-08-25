// @ts-ignore
import styles from '../ThemeButton/ThemeButton.module.scss';
import { useThemeProvider } from "../../../providers/ThemeContext"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion'
import { FC } from 'react'
import cn from 'classnames'
import { useMenuProvider } from '../../../providers/MenuProvider';

interface IThemeButton {
    dropdownMenuVariant?: boolean
}

export const ThemeButton: FC<IThemeButton> = ({ dropdownMenuVariant }) => {
    const { closeMenu } = useMenuProvider()
    const { theme, changeTheme } = useThemeProvider()

    return (
        <div className={cn(styles.main, {
            [styles.dropDownMenuVariant]: dropdownMenuVariant
        })}>

            {theme === 'light' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => {
                        changeTheme('dark')
                        closeMenu()
                    }}
                    className={styles.main}
                >
                    <DarkModeIcon className={styles.btn} />
                </motion.div>
            }

            {theme === 'dark' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => {
                        changeTheme('light')
                        closeMenu()
                    }}
                    className={styles.main}
                >
                    <LightModeIcon className={styles.btn} />
                </motion.div>
            }
        </div>
    )
}
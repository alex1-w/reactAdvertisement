// @ts-ignore
import styles from '../ThemeButton/ThemeButton.module.scss';
import { useThemeProvider } from "../../../providers/ThemeContext"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion'

export const ThemeButton = () => {
    const { theme, changeTheme } = useThemeProvider()

    return (
        <>
            {theme === 'light' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={ () => changeTheme('dark') }
                    className={styles.main}
                    >
                    <DarkModeIcon className={styles.btn} />
                </motion.div>
            }

            {theme === 'dark' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={ () =>changeTheme('light') }
                    className={styles.main}
                >
                    <LightModeIcon className={styles.btn} />
                </motion.div>
            }
        </>
    )
}
// @ts-ignore
import styles from '../ThemeButton/ThemeButton.module.scss';
import { useThemeProvider } from "../../../providers/ThemeContext"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion'

export const ThemeButton = () => {
    const { changeOnDark, type, changeOnLight } = useThemeProvider()

    return (
        <>
            {type === 'light' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={changeOnDark}
                    className={styles.main}
                >
                    <DarkModeIcon className={styles.btn} />
                </motion.div>
            }

            {type === 'dark' &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={changeOnLight}
                    className={styles.main}
                >
                    <LightModeIcon className={styles.btn} />
                </motion.div>
            }
        </>
    )
}
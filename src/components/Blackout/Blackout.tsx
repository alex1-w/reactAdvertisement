import styles from './Blackout.module.scss'
import { AnimatePresence, motion } from "framer-motion"

export const Blackout = () => {
    return (
        <AnimatePresence>

            <div className={styles.main}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.blackout}
                >


                </motion.div>
            </div>

        </AnimatePresence>
    )
}
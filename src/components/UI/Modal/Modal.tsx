//@ts-ignore
import styles from './Modal.module.scss'
import { AnimatePresence, motion } from "framer-motion"
import { createPortal } from "react-dom"
import { useModalContext } from '../ModalProvider/ModalProvider'
import { FC, useState } from 'react'

const cancelIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

export const Modal: FC = () => {
    const { isModalOpened, content, closeModal } = useModalContext()

    return createPortal(

        <AnimatePresence>
            {isModalOpened &&
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className={styles.modal}>

                        <div className={styles.modalContent}>
                            <div className={styles.modalContent__cancelIcon} onClick={closeModal}>
                                {cancelIcon}
                            </div>

                            {content}
                        </div>

                    </div>
                </motion.div>
            }
        </ AnimatePresence>
        , document.getElementById('modal') as HTMLElement
    )
}
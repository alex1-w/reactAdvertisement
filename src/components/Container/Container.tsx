//@ts-ignore
import styles from './Container.module.scss'
import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}
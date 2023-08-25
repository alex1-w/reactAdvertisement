//@ts-ignore
import styles from './PreloaderPage.module.scss';
import { Skeleton } from '../UI/Skeleton/Skeleton';
import { FC } from "react"


const PreloaderPage: FC = () => {
    return (
        <div className={styles.main}>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
        </div>
    )
};

export default PreloaderPage;

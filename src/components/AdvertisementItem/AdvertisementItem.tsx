import { FC } from 'react'
//@ts-ignore
import styles from './AdvertisementItem.module.scss'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface IAdvertisementProps {
    name: string
    description: string
    image: string
    id: number
}
// const linkArrow = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>

export const AdvertisementItem: FC<{ advertisement: IAdvertisementProps }> = ({ advertisement }) => {

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>

                <div className={styles.imgBlock}>
                    <img src={advertisement.image} alt="" />
                </div>

                <div className={styles.adDescription}>
                    <div className={styles.adDescription__header}>
                        <h3>{advertisement.name}</h3>
                        <p>{advertisement.description}</p>
                    </div>

                    <Link
                        to={`/advertisement/${advertisement.id}`}
                        className={styles.adDescription__linkToAdvertisement}
                    >
                        <Button
                            endIcon={<ArrowForwardIcon />}
                            variant='text'
                            color='info'
                        >
                            Подробнее
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}
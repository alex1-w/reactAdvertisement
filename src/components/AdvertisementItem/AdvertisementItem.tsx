//@ts-ignore
import styles from './AdvertisementItem.module.scss'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IAdvertisementResponse } from '../../services/advertisementService/advertisementservice.interface';

export const AdvertisementItem: FC<{ advertisement: IAdvertisementResponse }> = ({ advertisement }) => {

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>

                <div className={styles.imgBlock}>

                    <img src={advertisement.image} alt={advertisement.name} />

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
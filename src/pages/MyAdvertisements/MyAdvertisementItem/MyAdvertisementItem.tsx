// @ts-ignore
import styles from './MyAdvertisementItem.module.scss'
import { IAdvertisementResponse } from '../../../services/advertisementService/advertisementservice.interface'
import { editIcon, eyeIcon } from '../../../data/categories.data'
import { FC } from 'react'
import { Link } from 'react-router-dom'

export const MyAdvertisementItem: FC<IAdvertisementResponse> = ({ categoryId, description, image, name, id }) => {


    return (
        <div className={styles.main}>

            <div className={styles.imgBlock}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.mainContent}>

                <h3>{name}</h3>

                <div className={styles.mainContent__description}>
                    <p>{description}</p>
                </div>

            </div>

            <div className={styles.svgBlock}>

                <Link
                    to={`/edit-advertisement/${id}`}
                    className={styles.svgBlock__editIcon}
                >
                    {editIcon}
                </Link>

                {eyeIcon}
                
            </div>

        </div>
    )
}
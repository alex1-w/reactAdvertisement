// @ts-ignore
import styles from './MyAdvertisementItem.module.scss';
import { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { editIcon, eyeIcon } from '../../../../../data/svgIcons';
import { IAdvertisementResponse } from '../../../../../types/IAdvertisement';


export const MyAdvertisementItem: FC<IAdvertisementResponse> = ({ categoryId, description, image, name, id }) => {
    const navigate = useNavigate()

    const editAdvertisement = (id: number) => {
        navigate(`/edit-advertisement/${id}`)
    }

    return (
        <div className={styles.main}>

            <div className={styles.imgBlock}>
                <img src={image} alt={name} />
            </div>

            <div className={styles.description}>
                <p>{description}</p>
            </div>

            <div className={styles.buttons}>

                <div className={styles.buttons__editBtn} onClick={() => editAdvertisement(id)}>
                    {editIcon}
                </div>

                <div>{eyeIcon}</div>

            </div>

        </div>
    )
}
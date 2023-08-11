// @ts-ignore
import styles from './CategoryItem.module.scss';
import { ICategory } from '../../types/ICategoryOption';
import { FC } from 'react';


export const CategoryItem: FC<ICategory> = ({ description, id, image, name }) => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <h4>{name}</h4>
                <img src={image} alt={name} />
            </div>
        </div>
    )
}
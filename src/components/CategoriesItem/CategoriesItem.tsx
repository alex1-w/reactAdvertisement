//@ts-ignore
import styles from './CategoriesItem.module.scss'
import { Link } from 'react-router-dom'
import { FC } from 'react'
import { ICategory } from '../../types/ICategoryOption'

export const CategoriesItem: FC<{ category: ICategory }> = ({ category }) => {

    return (
        <section>
            {category.name}
        </section>
    )
}
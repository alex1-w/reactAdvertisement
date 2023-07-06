import styles from './CategoriesItem.module.scss'
import { Link } from 'react-router-dom'
import { ICategory } from '../../types/ICategory'
import { FC } from 'react'

export const CategoriesItem: FC<{ category: ICategory }> = ({ category }) => {
    return (
        <section>

            <div className={styles.main}>
                <div className={styles.wrapper}>

                    <Link to={category.link} className={styles.contentBlock}>

                        <div className={styles.imgBlock}>
                            {category.image}
                        </div>

                        <div className={styles.cartInfo}>
                            <h4>{category.name}</h4>
                            <p>
                                <span>234</span>&nbsp; -
                                объявлений на сайте
                            </p>
                        </div>

                    </Link>

                </div>
            </div>

        </section>
    )
}
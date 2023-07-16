//@ts-ignore
import styles from './CategoriesItem.module.scss'
import { Link } from 'react-router-dom'
import { ICategory } from '../../types/ICategory'
import { FC } from 'react'
import cn from 'classnames'

export const CategoriesItem: FC<{ category: ICategory }> = ({ category }) => {

    // let myclassnames = cn(`wrapper:{backgroundColor:${category.color}}`)

    return (
        <section>

            <div className={styles.main}>
                {/* <div className={cn(styles.wrapper, myclassnames)}> */}
                <div
                    //////////////////////////////////////////////////////////////////////////////
                    className={cn(styles.wrapper)}
                    style={{ backgroundColor: category.color }}
                >

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
//@ts-ignore
import styles from './CategoryNav.module.scss'
import { NavLink, useLocation } from 'react-router-dom';
import { ICategory } from '../../../types/ICategoryOption'
import { FC } from 'react'
import cn from 'classnames'


export const CategoryNav: FC<{ categories: ICategory[] }> = ({ categories }) => {
    const location = useLocation()
    const path = location.pathname.split('/').at(-1)

    console.log();

    return (

        <nav className={styles.main}>
            <ul>
                {categories.map(item => (

                    <li>
                        {/* <Link to={`/category-page/${item.id}`}>
                            <p>{item.name}</p>
                        </Link> */}
                        {/* <NavLink to={`/category-page/${item.id}`} className={({ isActive }) => isActive  && styles.active }> */}
                        <NavLink to={`/category-page/${item.id}`} className={cn(path === String(item.id) && styles.active)}>
                            <div>

                                <p>{item.name}</p>

                            </div>
                        </NavLink>
                    </li>
                ))

                }
            </ul>
        </nav>

    )
}

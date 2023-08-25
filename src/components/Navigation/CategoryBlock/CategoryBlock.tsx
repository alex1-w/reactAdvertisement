//@ts-ignore
import styles from './CategoryBlock.module.scss';
import { useQuery } from 'react-query';
import { categoryService } from '../../../services/categoryService/categoryService';
import { Skeleton } from '../../UI/Skeleton/Skeleton';
import { NotFoundComponent } from '../../NotFoundComponent/NotFoundComponent';
import { Link } from 'react-router-dom';
const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>

export const CategoryBlock = () => {
    const { data, isLoading } = useQuery(
        ['getCategories'],
        () => categoryService.getCategories()
    )

    return (
        <div className={styles.main}>
            {isLoading ?
                <div className={styles.categoryBlock}>
                    <Skeleton />
                </div>
                :
                <>{!data?.data.length
                    ?
                    <NotFoundComponent />
                    :
                    <div className={styles.wrapper}>
                        <div className={styles.categoryBlock}>

                            {data?.data.map(item => (
                                <Link
                                    to={`/category-page/${item.id}`}
                                    className={styles.categoryItem}
                                    key={item.id}
                                >
                                    <p>{item.name}</p>
                                    {arrowIcon}
                                </Link>
                            ))}

                        </div>
                    </div>
                }</>
            }

        </div>
    )
}
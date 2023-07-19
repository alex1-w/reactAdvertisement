//@ts-ignore
import styles from './Categories.module.scss'
import { useQuery } from 'react-query'
import { categoryService } from '../../services/categoryService'
import { CategoriesItem } from '../../components/CategoriesItem/CategoriesItem'
import { Container } from '../../components/Container/Container'
import { categories } from '../../data/categories.data'

export const Categories = () => {
    // const { data, error, isLoading } = useQuery(['getCategories'], () => categoryService.getCategories())
    // console.log(error, data, isLoading);

    return (

        <Container>
            <section className={styles.main}>

                <div className={styles.wrapper}>
                    {categories.map(item => (
                        <CategoriesItem category={item} key={item.name} />
                    ))}
                </div>

            </section>
        </Container>
    )
} 
// @ts-ignore
import styles from './HomePage.module.scss'
import { AdvertisementItem } from "../../components/AdvertisementItem/AdvertisementItem"
import { CategoriesItem } from "../../components/CategoriesItem/CategoriesItem"
import { Container } from "../../components/Container/Container"
import { useQuery } from 'react-query'
import { advertisementService } from '../../services/advertisementService/advertisementService'
import { Skeleton } from '../../components/UI/Skeleton/Skeleton'
import { NotFoundComponent } from '../../components/NotFoundComponent/NotFoundComponent'
import { categoryService } from '../../services/categoryService/categoryService'
import { CategoryItem } from '../../components/CategoryItem/CategoryItem'
import { ICategory } from '../../types/ICategoryOption'
import { useAdvertisements } from '../../hooks/useAdvertisements'
import { useCategories } from '../../hooks/useCategories'
// import {} from 'react-helmet'

const skeletons = Object.create(null)

export const Ads = () => {
    const { data: advertisementsData, isLoading: isAdvertisementsLoading } = useAdvertisements()
    const { data: categoriesData, isLoading: isCategoriesLoading } = useCategories()

    console.log(skeletons);


    return (
        <div className={styles.wrapper}>
            <section className={styles.categoryBlock}>
                <div className={styles.categoryBlock__wrapper}>

                    <h2>Популярные категории:</h2>

                    {isCategoriesLoading ?
                        <div className={styles.categoryBlock__categoriesGrid}>
                            {/* <Skeleton className={styles.categorySkeleton} />
                            <Skeleton className={styles.categorySkeleton} />
                            <Skeleton className={styles.categorySkeleton} />
                            <Skeleton className={styles.categorySkeleton} />
                            <Skeleton className={styles.categorySkeleton} />
                            <Skeleton className={styles.categorySkeleton} />
                        <Skeleton className={styles.categorySkeleton} /> */}
                            {/* {skeletons.map((item: any) => (
                                <Skeleton className={styles.categorySkeleton} />
                            ))} */}
                        </div>
                        :
                        <>
                            {!categoriesData?.data.length
                                ?
                                <NotFoundComponent />
                                :
                                <div className={styles.categoryBlock__categoriesGrid}>
                                    {categoriesData?.data?.map((category: ICategory) => (

                                        <CategoryItem
                                            key={category.id}
                                            description={category.description}
                                            id={category.id}
                                            image={category.image}
                                            name={category.name}
                                        />

                                    ))}
                                </div>}
                        </>}
                </div>
            </section>

            <section className={styles.main}>
                <Container>

                    <h1>Рекомендации для вас:</h1>

                    {isAdvertisementsLoading ?
                        <div className={styles.main__advertisementsBlock}>
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                            <Skeleton className={styles.advertisementSkeleton} />
                        </div>
                        :
                        <>
                            {
                                !advertisementsData?.data.length
                                    ?
                                    <NotFoundComponent />
                                    :
                                    <div className={styles.main__advertisementsBlock}>
                                        {advertisementsData?.data.map(ad => (
                                            <AdvertisementItem advertisement={ad} key={ad.id} />
                                        ))}
                                    </div>
                            }
                        </>
                    }
                </Container >
            </section>
        </div>
    )
}
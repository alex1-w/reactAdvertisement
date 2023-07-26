// @ts-ignore
import styles from './Ads.module.scss'
import { AdvertisementItem } from "../../components/AdvertisementItem/AdvertisementItem"
import { CategoriesItem } from "../../components/CategoriesItem/CategoriesItem"
import { Container } from "../../components/Container/Container"
import { useQuery } from 'react-query'
import { advertisementService } from '../../services/advertisementService/advertisementService'
import { Skeleton } from '../../components/UI/Skeleton/Skeleton'
import { NotFoundComponent } from '../../components/NotFoundComponent/NotFoundComponent'
import { categoryService } from '../../services/categoryService'

export const Ads = () => {

    const { data: advertisementsData, isLoading: isAdvertisementsLoading, } = useQuery(
        ['advertisements'],
        () => advertisementService.getAdvertisements(),
    )
    const { data: categoriesData, isLoading: isCategoriesLoading, } = useQuery(
        ['categories'],
        () => categoryService.getCategories(),
    )

    // console.log(advertisementsData?.data);
    // console.log(categoriesData?.data);

    return (
        <>
            <Container>
                <section className={styles.categoryBlock}>
                    <div className={styles.categoryBlock__wrapper}>

                        <h2>Популярные категории:</h2>

                        {isCategoriesLoading ?
                            <div className={styles.categoryBlock__categoriesGrid}>
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                                <Skeleton className={styles.categorySkeleton} />
                            </div>
                            :
                            <>
                                {
                                    !categoriesData?.data.length
                                        ?
                                        <NotFoundComponent /> :
                                        <div className={styles.categoryBlock__categoriesGrid}>
                                            {categoriesData?.data?.map((category: any) => (
                                                <CategoriesItem category={category} key={category.value} />
                                            ))}
                                        </div>
                                }
                            </>
                        }

                    </div>
                </section>

                <section className={styles.main}>

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
                </section>
            </Container >
        </>
    )
}
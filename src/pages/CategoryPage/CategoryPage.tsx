//@ts-ignore    
import styles from './CategoryPage.module.scss'
import { FC } from "react"
import { Container } from "../../components/Container/Container"
import { useNavigate, useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { categoryService } from "../../services/categoryService/categoryService"
import { motion } from 'framer-motion'
import { advertisementService } from '../../services/advertisementService/advertisementService'
import { Skeleton } from '../../components/UI/Skeleton/Skeleton'
import { NotFoundComponent } from '../../components/NotFoundComponent/NotFoundComponent'
import { AdvertisementItem } from '../../components/AdvertisementItem/AdvertisementItem'
import { CategoryNav } from './CategoryNav/CategoryNav'
import { useCategories } from '../../hooks/useCategories'

export const CategoryPage: FC = () => {
    const navigate = useNavigate()
    const params = useParams()

    const { data: categoryData, isLoading: categoryLoading } = useQuery(
        ['getCategory', params?.id],
        () => categoryService.getCategory(String(params?.id)),
        {
            onSuccess: (data) => {
                if (data.data === null) {
                    navigate('/not-found')
                }
            },
            onError: () => { }
        }
    )

    const { data: categories, isLoading: isCategoryLoading } = useCategories()

    const { data: categoryAdvertisements, isLoading } = useQuery(
        ['getCategoryAdvertisements', params?.id],
        () => advertisementService.getFilteredAdvertisements(String(params?.id))
    )

    return (

        <>
            <div className={styles.wrapper}>

                {/* {true */}
                {isCategoryLoading
                    ?
                    <div>
                        <Skeleton />
                    </div>
                    :
                    <>
                        {categories?.data
                            &&
                            <CategoryNav categories={categories?.data!} />
                        }
                    </>

                }

                <div className={styles.main}>
                    <div className={styles.top}>
                        {categoryLoading ? <p>loading</p>
                            :
                            <>
                                {categoryData?.data
                                    &&
                                    <>
                                        <div className={styles.top__head}>

                                            <h1>{categoryData?.data.name}</h1>

                                            <div className={styles.top__imgBlock}>
                                                <img src={categoryData?.data.image} alt={categoryData?.data.name} />
                                            </div>

                                        </div>
                                        <div className={styles.top__description}>
                                            <p>{categoryData?.data.description}</p>
                                        </div>
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>

                {isLoading
                    ?
                    <div className={styles.advertisementsBlock}>
                        <Skeleton />
                    </div >
                    :
                    <>
                        {!categoryAdvertisements?.data.length
                            ?
                            <NotFoundComponent />
                            :
                            <Container>
                                <div className={styles.advertisementsBlock}>
                                    {categoryAdvertisements?.data.map(item => (
                                        <AdvertisementItem advertisement={item} key={item.id} />
                                    ))}
                                </div>
                            </Container>
                        }
                    </>
                }
            </div >
        </>
    )
}
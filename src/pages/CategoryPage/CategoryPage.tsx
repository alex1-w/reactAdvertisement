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

export const CategoryPage: FC = () => {
    const navigate = useNavigate()
    const params = useParams()

    const { data: categoryData, isLoading: categoryLoading } = useQuery(
        ['getCategory'],
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

    const { data: categoryAdvertisements, isLoading } = useQuery(
        ['getCategoryAdvertisements'],
        () => advertisementService.getFilteredAdvertisements(String(params?.id))
    )

    return (

        <>
            <div className={styles.wrapper}>

                <div className={styles.main}>

                    <motion.div
                        className={styles.top}
                    // initial={{ maxHeight: 350 }}
                    // animate={{ maxHeight: 'auto' }}
                    >
                        {categoryLoading ? <p>loading</p>
                            :
                            <>
                                {categoryData?.data
                                    &&
                                    <>
                                        <div className={styles.top__head}>
                                            <div className={styles.top__name}>
                                                <h1>{categoryData?.data.name}</h1>
                                            </div>
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

                    </motion.div>
                </div >

                {
                    isLoading
                        ?
                        <div className={styles.advertisementsBlock
                        } >
                            <Skeleton />
                        </div >
                        :
                        <>
                            {
                                !categoryAdvertisements?.data.length
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
// @ts-ignore
import styles from './MyAdvertisementComponent.module.scss'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { MyAdvertisementItem } from './MyAdvertisementItem/MyAdvertisementItem'
import { userService } from '../../../../services/userService/userService'
import { Skeleton } from '@mui/material'


export const MyAdvertisementComponent = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery(
        ['getUserAdvertisements'],
        () => userService.getUserAdvertisement(),
        {
            onError: () => { navigate('/not-found') },
            // retry: false,
        }
    )

    return (
        <div className={styles.main}>
            <h1>Мои объявления</h1>


            {isLoading
                ?
                <div className={styles.advertisementsBlock}>
                    <Skeleton />
                </div>
                :
                <>{
                    data?.data
                        ?
                        <div className={styles.advertisementsBlock}>
                            {data?.data.map(item => (
                                <MyAdvertisementItem
                                    categoryId={item.categoryId}
                                    description={item.description}
                                    image={item.image}
                                    name={item.name}
                                    id={item.id}
                                    key={item.id}
                                />
                            ))}
                        </div>
                        :
                        <h1>пусто</h1>
                }
                </>
            }

        </div>
    )
}   
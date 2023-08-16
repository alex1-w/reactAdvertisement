// @ts-ignore
import styles from './MyAdvertisements.module.scss'
import { userService } from '../../services/userService/userService'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Skeleton } from '../../components/UI/Skeleton/Skeleton'
import { MyAdvertisementItem } from './MyAdvertisementItem/MyAdvertisementItem'
import { IAdvertisementResponse } from '../../services/advertisementService/advertisementservice.interface'

export const MyAdvertisements = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery(
        ['getUserAdvertisements'],
        () => userService.getUserAdvertisement(),
        {
            onError: () => { navigate('/not-found') }
        }
    )
    // const advertisementsSeparate = (ad: IAdvertisementResponse) => { }

    console.log(data?.data);

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>

                <h1>мои объявления</h1>

                <div>
                    {isLoading
                        ?
                        <div className={styles.content}>
                            <Skeleton className={styles.skeleton} />
                            <Skeleton className={styles.skeleton} />
                            <Skeleton className={styles.skeleton} />
                            <Skeleton className={styles.skeleton} />
                        </div>
                        :
                        <>
                            {data?.data.length
                                ?
                                <div className={styles.content}>
                                    {data.data.map(item => (
                                        <MyAdvertisementItem
                                            id={item.id}
                                            categoryId={item.categoryId}
                                            description={item.description}
                                            image={item.image}
                                            name={item.name}
                                            key={item.id}
                                        />
                                    ))}
                                </div>
                                :
                                <p>объявлений пока нет</p>
                            }
                        </>}
                </div>

            </div>
        </div>
    )
}
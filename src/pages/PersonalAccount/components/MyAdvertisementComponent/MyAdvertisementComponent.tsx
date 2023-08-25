// @ts-ignore
import styles from './MyAdvertisementComponent.module.scss'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { MyAdvertisementItem } from './MyAdvertisementItem/MyAdvertisementItem'
import { userService } from '../../../../services/userService/userService'


export const MyAdvertisementComponent = () => {
    const navigate = useNavigate()

    const { data, isLoading } = useQuery(
        ['getUserAdvertisements'],
        () => userService.getUserAdvertisement(),
        {
            onError: () => { navigate('/not-found') }
        }
    )

    // console.log(data);

    return (
        <div className={styles.main}>
            <h1>Мои объявления</h1>

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
        </div>
    )
}   
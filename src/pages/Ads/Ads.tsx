//@ts-ignore
import styles from './Ads.module.scss'
import { AdvertisementItem } from "../../components/AdvertisementItem/AdvertisementItem"
import { CategoriesItem } from "../../components/CategoriesItem/CategoriesItem"
import { Container } from "../../components/Container/Container"
import { categories } from "../../data/categories.data"
import { advertisements } from '../../data/advertisement.data'

export const Ads = () => {
    return (
        <>
            <Container>
                <section className={styles.categoryBlock}>
                    <div className={styles.categoryBlock__wrapper}>

                        <h2>Популярные категории:</h2>

                        <div className={styles.categoryBlock__categoriesGrid}>
                            {categories.map(category => (
                                <CategoriesItem category={category} key={category.name} />
                            ))}
                        </div>

                    </div>
                </section>

                <section className={styles.main}>

                    <h1>Рекомендации для вас:</h1>

                    <div className={styles.main__advertisementsBlock}>
                        {advertisements.map(ad => (
                            <AdvertisementItem advertisement={ad} key={ad.id} />
                        ))}
                    </div>
                </section>
            </Container>
        </>
    )
}
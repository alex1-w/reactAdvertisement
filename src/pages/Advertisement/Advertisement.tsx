import styles from './Advertisement.module.scss'
import { useParams } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { Button } from '@mui/material'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { advertisements } from '../../data/advertisement.data'

export const Advertisement = () => {
    const { id } = useParams()
    const advertisement = advertisements.find(ad => Number(ad.id) === Number(id))
    const advertisementNumber = advertisement?.name

    const [numberButtonVariant, setNumberButtonVariant] = useState<any>('УЗНАТЬ НОМЕР')

    const showNumber = () => setNumberButtonVariant(advertisementNumber || 'номер не указан или указан некорректно')

    return (
        <Container>
            <section className={styles.main}>

                <aside className={styles.asideBlock}>

                    <h2>433542 руб.</h2>

                    <div className={styles.asideBlock__description}>

                        <div className={styles.asideBlock__btns}>
                            <Button type='button' variant='contained' color='info' > написать сообщение</Button>
                            <Button type='button' variant='contained' color='secondary' onClick={showNumber}>{numberButtonVariant}</Button>
                        </div>

                        <div className={styles.asideBlock__aboutAdvertisement}>
                            <h3>Cостояние:</h3>
                            <h3>Категория:</h3>
                        </div>

                        <div className={styles.asideBlock__mainText}>
                            <h1>Описание:</h1>
                            <p>{advertisement?.description}</p>
                        </div>

                    </div>
                </aside>

                <div className={styles.advertisementBlock}>

                    <div className={styles.advertisementBlock__head}>
                        <h1>{advertisement?.name}</h1>
                        
                        <div className={styles.advertisementBlock__btns}>
                            <Button
                                variant='outlined'
                                className={styles.likeBtn}
                                endIcon={<FavoriteBorderIcon />}
                            >
                                добавить в избранное
                            </Button>

                            <Button variant='outlined'>добавить еше куда-то</Button>
                        </div>
                    </div>

                    <div className={styles.advertisementBlock__imbBlock}>
                        <img src={advertisement?.image} alt="" />
                    </div>

                </div>

            </section>
        </Container>
    )
}
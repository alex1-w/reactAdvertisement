//@ts-ignore
import styles from './Advertisement.module.scss'
import { useParams } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { Button } from '@mui/material'
import { FC, useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useQuery } from 'react-query'
import { advertisementService } from '../../services/advertisementService/advertisementService'

export const Advertisement = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(
        ['getAdvertisement'],
        () => advertisementService.getAdvertisement(String(id)),
    )

    // const advertisementNumber = advertisement?.phoneNumber
    const [numberButtonVariant, setNumberButtonVariant] = useState<any>('УЗНАТЬ НОМЕР')
    // const showNumber = () => setNumberButtonVariant(advertisementNumber || 'номер не указан')

    return (
        <Container>
            <section className={styles.main}>

                <div className={styles.leftPart}>
                    <div className={styles.leftPart__headBlock}>

                        <div className={styles.leftPart__titleBlock}>
                            <h1>{data?.data?.name}</h1>
                        </div>

                    </div>

                    <div className={styles.leftPart__imageBlock}>
                        <img src={data?.data?.image} alt={data?.data?.name} />
                    </div>
                    <div className={styles.leftPart__buttons}>

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

                <aside className={styles.rightPart}>

                    <div className={styles.rightPart__price}>
                        <h4>433542&nbsp;руб.</h4>
                    </div>


                    <div className={styles.rightPart__about}>
                        <h5>Cостояние:</h5>
                        <h5>Категория:</h5>
                    </div>

                    <div className={styles.rightPart__description}>
                        <h5>Описание:</h5>
                        <p>{data?.data?.description}</p>
                    </div>

                    <div className={styles.rightPart__buttons}>
                        <Button
                            type='button'
                            variant='contained'
                            color='info'
                        >
                            написать сообщение
                        </Button>
                        <Button
                            type='button'
                            variant='contained'
                            color='secondary'
                            // onClick={showNumber}
                        >
                            {numberButtonVariant}
                        </Button>
                    </div>

                </aside>

            </section>
        </Container>
    )
}
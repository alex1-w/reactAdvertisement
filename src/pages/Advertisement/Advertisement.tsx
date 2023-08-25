//@ts-ignore
import styles from './Advertisement.module.scss'
import { Link, useParams } from "react-router-dom"
import { Container } from "../../components/Container/Container"
import { Button } from '@mui/material'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useAdvertisement } from '../../hooks/useAdvertisement'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import dayjs from 'dayjs'

const localizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(localizedFormat)
require('dayjs/locale/ru')
dayjs.locale('ru')

export const Advertisement = () => {
    const { id } = useParams()
    const [numberButtonVariant, setNumberButtonVariant] = useState<any>('УЗНАТЬ НОМЕР')
    const { data, isLoading } = useAdvertisement(String(id))

    let formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currency:"RUB",
        minimumFractionDigits: 0
    });

    console.log(formatter.format(535445));


    const formattedDate = (date: string | undefined) => dayjs(date).format('D MMMM YYYY' + 'г.')

    console.log(data?.data.category);

    return (
        <div className={styles.wrapper}>

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

                            <Button variant='outlined' className={styles.likeBtn} endIcon={<FavoriteBorderIcon />}>
                                добавить в избранное
                            </Button>

                            <Button variant='outlined'>добавить еше куда-то</Button>
                        </div>
                    </div>

                    <aside className={styles.rightPart}>

                        <div className={styles.rightPart__price}>
                            <h4>{formatter.format(433542)}</h4>
                        </div>


                        <div className={styles.rightPart__about}>
                            <div className={styles.rightPart__about__categoryBlock}>

                                <h5>Категория:</h5>

                                <Link
                                    to={`/category-page/${data?.data?.category?.id}`}
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`смотреть еще из этой категории...`}
                                >
                                    <p>{data?.data?.category?.name}</p>
                                </Link>

                                <Tooltip id="my-tooltip" >
                                    {/* {linkArrow} */}
                                </Tooltip>

                            </div>
                        </div>

                        <div className={styles.rightPart__description}>
                            <h5>Описание:</h5>
                            <p>{data?.data?.description}</p>
                        </div>

                        <div className={styles.rightPart__dateBlock}>
                            <p>Опублтковано:</p>
                            <p>  {formattedDate(data?.data.createdAt)}</p>

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

        </div>)
}
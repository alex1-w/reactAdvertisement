// @ts-ignore
import styles from './PersonalAccount.module.scss';
import { profileIcon } from '../../data/categories.data';
import { Container } from '../../components/Container/Container';
import { useQuery } from 'react-query';
import { userService } from '../../services/userService/userService';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react'
import { ChangePasswordComponent } from './ChangePasswordComponent/ChangePasswordComponent';
import { FavoritesComponent } from './FavoritesComponent/FavoritesComponent';
import { MyAdvertisementComponent } from './MyAdvertisementComponent/MyAdvertisementComponent';

const links = [
    {
        name: 'мои объявления',
        value: 'myAdvertisements',
    },
    {
        name: 'изменить пароль',
        value: 'changePassword',
    },
    {
        name: 'избранное',
        value: 'favorites',
    },
    {
        name: 'сменить аккаунт',
        value: 'changeAccount',
    },
]

type Variant = 'myAdvertisements' | 'changePassword' | 'favorites' | 'changeAccount'

export const PersonalAccount = () => {
    const [content, setContent] = useState<string | Variant>('changePassword')

    const setNewContent = (variant: string | Variant) => setContent(variant)

    const { data } = useQuery(
        ['getUserInfo'],
        () => userService.getUserInfo()
    )

    return (
        <Container>
            <main className={styles.main}>

                <aside>
                    <div className={styles.userInfo}>
                        {profileIcon}
                        {data?.data.login}
                    </div>

                    <div className={styles.line} />

                    <div className={styles.linksBlock}>

                        {links.map(item =>
                            item.name !== 'сменить аккаунт'
                            &&
                            <div
                                key={item.name}
                                className={styles.linksBlock__item}
                                onClick={() => setNewContent(item.value)}
                            >
                                <p>{item.name}</p>
                            </div>
                        )}

                    </div>
                </aside>

                <section className={styles.contentBlock}>


                    {content === 'changePassword' && <ChangePasswordComponent />}
                    {content === 'favorites' && <FavoritesComponent />}
                    {content === 'myAdvertisemnts' && <MyAdvertisementComponent />}

                </section>

            </main>
        </Container>
    )
}
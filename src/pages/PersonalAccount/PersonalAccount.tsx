// @ts-ignore
import styles from './PersonalAccount.module.scss';
import { profileIcon } from '../../data/svgIcons';
import { Container } from '../../components/Container/Container';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react'
import { ChangePasswordComponent } from './components/ChangePasswordComponent/ChangePasswordComponent';
import { FavoritesComponent } from './components/FavoritesComponent/FavoritesComponent';
import { MyAdvertisementComponent } from './components/MyAdvertisementComponent/MyAdvertisementComponent';
import { MenuNavLink } from './components/MenuNavLink/MenuNavLink';
import { useUser } from '../../hooks/useUser';

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
        name: 'сменить аккаунт',
        value: 'changeAccount',
    },
]

type Variant = 'myAdvertisements' | 'changePassword' | 'changeAccount'

export const PersonalAccount = () => {
    const [content, setContent] = useState<string | Variant>('myAdvertisements')
    const { data } = useUser()

    return (

        <div className={styles.wrapper}>

            <Container>
                <main className={styles.main}>

                    <aside>
                        <div className={styles.userInfo}>
                            {profileIcon}
                            {data?.data.login}
                        </div>

                        <div className={styles.line} />

                        <nav className={styles.linksBlock}>
                            <ul>

                                {links.map(item =>
                                    item.name !== 'сменить аккаунт'
                                    &&
                                    <MenuNavLink
                                        name={item.name}
                                        value={item.value}
                                        setNewContent={setContent}
                                        key={item.value}
                                    />
                                )}
                            </ul>

                        </nav>
                    </aside>

                    <section className={styles.contentBlock}>

                        {/* {content === 'favorites' && <FavoritesComponent />} */}
                        {content === 'changePassword' && <ChangePasswordComponent />}
                        {content === 'myAdvertisements' && <MyAdvertisementComponent />}

                    </section>

                </main>
            </Container>


        </div>

    )
}
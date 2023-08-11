//@ts-ignore
import styles from './Header.module.scss'
import { Logo } from '../../components/Logo/Logo'
import { InputSearch } from '../../components/UI/InputSearch/InputSearch'
import { Navigation } from '../../components/Navigation/Navigation'
import { BurgerMenu } from '../../components/UI/BurgerMenu/BurgerMenu'
import { ProfileBtn } from '../../components/UI/ProfileBtn/ProfileBtn'
import { UserMenu } from '../../components/UI/UserMenu/UserMenu'
import { useUserContext } from '../../providers/UserProvider'


export const Header = () => {
    const { isAuth } = useUserContext()

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />

                <InputSearch inputVariant='headerVariant' />

                <Navigation variant='headerVariant' />

                <div className={styles.userInteractBlock}>
                    {isAuth && <UserMenu />}
                    <ProfileBtn />
                    <div className={styles.userInteractBlock__burgerMenu}>  <BurgerMenu /></div>
                </div>

            </div>
        </header >
    )
}
//@ts-ignore
import styles from './Header.module.scss'
import { Logo } from '../../components/Logo/Logo'
import { InputSearch } from '../../components/UI/InputSearch/InputSearch'
import { Navigation } from '../../components/Navigation/Navigation'
import { BurgerMenu } from '../../components/UI/BurgerMenu/BurgerMenu'
import { ProfileBtn } from '../../components/UI/ProfileBtn/ProfileBtn'


export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />

                <InputSearch inputVariant='headerVariant' />

                <Navigation variant='headerVariant' />

                <div className={styles.userInteractBlock}>
                    <ProfileBtn />
                    <div className={styles.userInteractBlock__burgerMenu}>  <BurgerMenu /></div>
                </div>

            </div>
        </header >
    )
}
//@ts-ignore
import styles from './Header.module.scss'
import { useModalContext } from '../../components/UI/ModalProvider/ModalProvider'
import { AuthenticationWrapper } from '../../components/AuthenticationWrapper/AuthenticationWrapper'
import { Logo } from '../../components/Logo/Logo'
import { InputSearch } from '../../components/UI/InputSearch/InputSearch'
import { Navigation } from '../../components/Navigation/Navigation'
import { BurgerMenu } from '../../components/UI/BurgerMenu/BurgerMenu'
import { ThemeButton } from '../../components/UI/ThemeButton/ThemeButton'

const exitIcon =
    <svg xmlns="http://www.w3.org/2000/svg" height="2.4em" viewBox="0 0 512 512">
        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
    </svg>

const userIcon = <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>

export const Header = () => {
    const { handleModal } = useModalContext()

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Logo />

                <InputSearch inputVariant='headerVariant' />

                <Navigation variant='headerVariant' />

                <div className={styles.userInteractBlock}>
                    <button
                        className={styles.userInteractBlock__enterBlock}
                        onClick={() => { handleModal(<AuthenticationWrapper />) }}
                    >
                        {/* {exitIcon} */}
                        <p>Войти</p>

                        <div>
                            {userIcon}
                        </div>
                    </button>

                    <div className={styles.userInteractBlock__burgerMenu}>  <BurgerMenu /></div>
                </div>

            </div>
        </header >
    )
}
//@ts-ignore
import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useModalContext } from '../UI/ModalProvider/ModalProvider';
import { FC, Fragment, useState } from 'react';
import { useMenuProvider } from '../../providers/MenuProvider'
import { CategoryBlock } from './CategoryBlock/CategoryBlock';
import { useUserContext } from '../../providers/UserProvider';
// const arrowDownIcon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>

const links =
    [
        { name: 'Main', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Create Adv', link: '/create-ad' },
    ]

interface INavProps {
    variant: 'headerVariant' | 'burgerMenuVariant'
}

export const Navigation: FC<INavProps> = ({ variant }) => {
    const { isAuth } = useUserContext()

    const [isCategoryBlockShowed, setIsCategoryBlockShowed] = useState<boolean>(false)
    const showCategoryBlock = () => setIsCategoryBlockShowed(!isCategoryBlockShowed)

    const { isModalOpened } = useModalContext()
    const { closeMenu } = useMenuProvider()

    const closeBurgerMenu = () => {
        if (isModalOpened === false) return closeMenu()
        return
    }

    return (
        <nav className={cn({
            [styles.headerVariant]: variant === 'headerVariant',
            [styles.burgerMenuVariant]: variant === 'burgerMenuVariant'
        })}>
            <ul>{links.map(item => (

                <Fragment key={item.link}>
                    {item.link !== '/create-ad' && item.link !== '/categories'
                        ?
                        <li>
                            <NavLink
                                onClick={closeBurgerMenu}
                                to={item.link}
                                className={cn(window.location.pathname === item.link && styles.active)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                        :
                        <>
                            {isAuth
                                &&
                                <li>
                                    <NavLink
                                        onClick={closeBurgerMenu}
                                        to={item.link}
                                        className={cn(window.location.pathname === item.link && styles.active)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>}
                        </>}
                </Fragment>))}

            </ul>
            <div
                className={styles.categoryBlock}
                onMouseEnter={() => { setIsCategoryBlockShowed(true) }}
                onMouseLeave={() => { setIsCategoryBlockShowed(false) }}
            >
                <p>Category</p>
                {isCategoryBlockShowed && <CategoryBlock />}
            </div>
        </nav>
    )
}
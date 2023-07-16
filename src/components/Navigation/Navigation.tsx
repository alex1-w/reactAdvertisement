//@ts-ignore
import styles from './Navigation.module.scss';
import { NavLink, useRouteError } from 'react-router-dom';
import cn from 'classnames';
import { useModalContext } from '../UI/ModalProvider/ModalProvider';
import { FC } from 'react';

const links = [
    { name: 'Main', link: '/' },
    { name: 'Advertisement', link: '/advertisement' },
    { name: 'Categories', link: '/categories' },
    { name: 'Create Adv', link: '/create-ad' }
]

interface INavProps {
    variant: 'headerVariant' | 'burgerMenuVariant'
}

export const Navigation: FC<INavProps> = ({ variant }) => {
    const currentLink = window.location.pathname
    const { isModalOpened } = useModalContext()

    return (
        // <nav className={styles.navigationBlock}>
        <nav className={cn({
            [styles.headerVariant]: variant === 'headerVariant',
            [styles.burgerMenuVariant]: variant === 'burgerMenuVariant'
        })}>

            <ul className={styles.links}>

                {links.map(link => (
                    <li key={link.name} >
                        <NavLink
                            to={link.link}
                            className={cn(window.location.pathname === link.link && styles.active)}
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}

            </ul>

        </nav>
    )
}
//@ts-ignore
import styles from './UserMenuItem.module.scss'
import { FC } from 'react'
import { Link } from "react-router-dom"


const links = [
    {
        link: '/personal-account',
        name: `личный кабинет`
    },
    {
        link: '/my-advertisements',
        name: 'мои объявления'
    },
    {
        link: '/',
        name: 'аууца'
    },
    {
        link: '/',
        name: 'выйти'
    },
]

interface IUserMenuItem {
    // children?: JSX.Element | React.ReactNode | any,
    svg: JSX.Element,
    // children?: React.ReactNode,
    // svg?: React.ReactElement,
    name: string
    link: string
}

export const UserMenuItem: FC<IUserMenuItem> = ({ svg, name, link }) => {

    return (
        <Link to={link} className={styles.main}>
            <li>
                {svg}
                <p>{name}</p>
            </li>
        </Link>
    )
}
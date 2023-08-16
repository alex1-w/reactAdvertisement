//@ts-ignore
import styles from './UserMenu.module.scss'
import { personalAccountIcon, profileIcon } from '../../../data/categories.data'
import { useState, useRef, useEffect, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUserContext } from '../../../providers/UserProvider'
import { UserMenuItem } from './UserMenuItem/UserMenuItem'

const links = [
    {
        link: '/personal-account',
        svg: personalAccountIcon,
        name: `личный кабинет`
    },
    {
        link: '/my-advertisements',
        svg: profileIcon,
        name: 'мои объявления'
    },
    {
        link: '/frer',
        svg: personalAccountIcon,
        name: 'аууца'
    },
    {
        link: '/frerereb',
        svg: personalAccountIcon,
        name: 'выйти'
    },
]

export const UserMenu = () => {
    const [isMenuShowed, setIsMenuShowed] = useState<boolean>(false)
    const { exit } = useUserContext()
    const menuIsActiveRef = useRef<HTMLDivElement>(null)

    useEffect(
        () => {
            if (isMenuShowed === true) menuIsActiveRef?.current?.classList.add(styles.menuIsActive)
            if (isMenuShowed === false) menuIsActiveRef?.current?.classList.remove(styles.menuIsActive)
        },
        [isMenuShowed]
    )

    const exitFunc = () => exit()

    return (
        <motion.div
            className={styles.main}
            onMouseEnter={() => { setIsMenuShowed(true) }}
            onMouseLeave={() => { setIsMenuShowed(false) }}
        >
            <div className={styles.iconBlock} ref={menuIsActiveRef}>
                {profileIcon}
            </div>
            <AnimatePresence>

                {isMenuShowed
                    &&
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={isMenuShowed ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.menu}
                    >
                        <div className={styles.menu__wrapper}>
                            <ul>
                                {links.map(link => (
                                    link.name !== 'выйти'
                                        ?
                                        <UserMenuItem link={link.link} name={link.name} key={link.name} svg={link.svg} />
                                        :
                                        <></>
                                ))}
                            </ul>

                            <div className={styles.menu__line}></div>

                            <div onClick={exitFunc} className={styles.menu__exitBtn}>

                                {links.map(link => (
                                    link.name === 'выйти'
                                        ?
                                        <div key={link.link}>
                                            <p className={styles.menu__exitBtn__name}>{link.name}</p>
                                        </div>
                                        :
                                        <></>
                                ))}

                            </div>

                        </div>
                    </motion.div>}
            </AnimatePresence>
        </motion.div>
    )
}
// @ts-ignore
import styles from './MenuNavLink.module.scss';
import { FC, useEffect, useRef, useState } from 'react';

interface IMenuNavLink {
    name: string;
    value: string;
    setNewContent: (content: string) => void;
    // content: string
}

export const MenuNavLink: FC<IMenuNavLink> = ({ name, setNewContent, value }) => {

    return (
        <li>
            <div
                className={styles.link}
                onClick={() => { setNewContent(value) }}
            >
                <p>{name}</p>
            </div>
        </li>
    )
}
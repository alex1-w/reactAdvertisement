//@ts-ignore
import styles from './AuthenticationWrapper.module.scss'
import { LogIn } from '../LogIn/LogIn'
import { SignIn } from '../SignIn/SignIn'
import { useState } from 'react'

export const AuthenticationWrapper = () => {
    const [pageVariant, setPageVariant] = useState<'login' | 'signin'>('login')

    return (
        <>
            <div className={styles.pageVariantBlock}>
                <p onClick={() => setPageVariant('login')}>login</p>
                <p onClick={() => setPageVariant('signin')}>sign in</p>
            </div>

            {pageVariant === 'login' && <LogIn />}
            {pageVariant === 'signin' && <SignIn />}

        </>
    )
}
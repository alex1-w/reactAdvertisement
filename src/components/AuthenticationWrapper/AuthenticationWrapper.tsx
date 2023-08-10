//@ts-ignore
import styles from './AuthenticationWrapper.module.scss'
import { LogIn } from '../LogIn/LogIn'
import { SignIn } from '../SignIn/SignIn'
import { useState } from 'react'
import { useAuthenticationWrapperContext } from '../../providers/Authentication'

export const AuthenticationWrapper = () => {
    const { changeWrapper, pageVariant } = useAuthenticationWrapperContext()
    // const [pageVariant, setPageVariant] = useState<'login' | 'signin'>('login')

    return (
        <div className={styles.main}>
            <div className={styles.pageVariantBlock}>
                <p onClick={() => changeWrapper('login')}>login</p>
                <p onClick={() => changeWrapper('signin')}>sign in</p>
            </div>

            {pageVariant === 'login' && <LogIn />}
            {pageVariant === 'signin' && <SignIn />}

        </div>
    )
}
//@ts-ignore
import styles from './LogIn.module.scss'
import { ChangeEvent, useState } from "react"
import { http } from "../../http/http"
import { useSnackbar } from 'notistack'
import { useForm, SubmitHandler } from 'react-hook-form'
import cn from 'classnames'
import { ILoginForm } from '../../types/ILoginForm'
import { Input } from '../UI/Input/Input'
import { Button } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'

export const LogIn = () => {

    const { register, handleSubmit, setError, formState: { errors, isDirty, dirtyFields, isValid, submitCount } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
            repeatPassword: '',
        },

    })
    // console.log(errors);

    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        console.log(data);

        // try {
        // const { data } = await http.post('/user/authentication', {})
        // console.log(data);
        // } catch (err) {
        // return enqueueSnackbar('ошибка сервера', { variant: 'error' })
        // }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsBlock}>

            <div className={styles.inputItem}>
                <Input inputType='login' minLength={5} name='login' placeholder='login' register={register} type='text' />
                <p>{errors.login?.message}</p>
            </div>

            <div className={styles.inputItem}>
                <Input inputType='password' minLength={5} name='password' placeholder='password' register={register} type='password' />
                <p>{errors.password?.message}</p>
            </div>

            <Button
                className={styles.btnAuth}
                type='submit'
                disabled={!isValid}
                color='success'
                size='large'
                variant='contained'
            >
                authentication
            </Button>

        </form>
    )
}
import styles from './SignIn.module.scss'
import { ChangeEvent, useState } from "react"
import { http } from "../../http/http"
import cn from 'classnames'
import { useForm } from 'react-hook-form'
import { Button } from '@mui/material'
import { Input } from '../UI/Input/Input'

export interface IFormState {
    login: string
    password: string
    repeatPassword: string
}

export const SignIn = () => {

    const { register, handleSubmit, setError, formState: { errors, isDirty, dirtyFields, isValid, submitCount } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
            repeatPassword: '',
        }
    })

    // console.log(isDirty);
    // console.log('d',dirtyFields);
    // console.log('v',isValid);
    // console.log(submitCount);

    const onSubmit = async (formData: IFormState) => {
        if (submitCount === 0 && formData.password.length < 6) return setError('password', { message: 'пароль должен быть больше 5 сивмолов' })
        if (formData.password !== formData.repeatPassword) return setError('repeatPassword', { message: 'пароли не совпадают' })

        try {
            const { data } = await http.post('/user/registration', { login: formData.login, password: formData.password })
            console.log(data);

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.inputsBlock}>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsBlock}>

                <div className={styles.inputItem}>
                    <Input inputType='login' minLength={5} name='login' placeholder='login' register={register} type='text' />
                    <p>{errors.login?.message}</p>
                </div>

                <div className={styles.inputItem}>
                    <Input inputType='password' minLength={5} name='password' placeholder='password' register={register} type='password' />
                    <p>{errors.password?.message}</p>
                </div>

                <div className={styles.inputItem}>
                    <Input inputType='repeatpassword' minLength={5} name='repeatPassword' placeholder='repeat password' register={register} type='password' />
                    <p>{errors.repeatPassword?.message}</p>
                </div>


                <Button
                    disabled={!isValid}
                    color='success'
                    size='large'
                    variant='contained'
                >
                    registration
                </Button>
            </form>
        </div>
    )
}